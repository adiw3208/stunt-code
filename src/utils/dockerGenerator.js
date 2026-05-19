const path = require("path");
const { createFileIfNotExists } = require("./fileHelper");

function generateDockerConfig(rootPath, framework = "node") {
  const configs = getDockerFrameworkConfig(framework);

  Object.entries(configs).forEach(([fileName, content]) => {
    createFileIfNotExists(path.join(rootPath, fileName), content);
  });
}

function getDockerFrameworkConfig(framework) {
  const configs = {
    node: {
      Dockerfile: `# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "src/index.js"]
`,
      ".dockerignore": `node_modules
npm-debug.log*
.git
.gitignore
.vscode
.idea
.env
.env.local
*.md
Dockerfile
docker-compose.yml
`,
    },
    nextjs: {
      Dockerfile: `# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
`,
      ".dockerignore": `node_modules
npm-debug.log*
.git
.gitignore
.vscode
.idea
.env
.env.local
*.md
Dockerfile
docker-compose.yml
.next
`,
    },
    vite: {
      Dockerfile: `# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
`,
      ".dockerignore": `node_modules
npm-debug.log*
.git
.gitignore
.vscode
.idea
.env
.env.local
*.md
Dockerfile
docker-compose.yml
dist
`,
      "nginx.conf": `server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
      try_files $uri $uri/ /index.html;
    }

    location /api {
      proxy_pass http://api:3000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
}
`,
    },
  };

  const shared = {
    "docker-compose.yml": `version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=myapp
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
`,
  };

  return { ...configs[framework] || configs.node, ...shared };
}

module.exports = { generateDockerConfig };
