const path = require("path");
const { createFileIfNotExists } = require("./fileHelper");

function generateEnvConfig(rootPath, framework = "generic") {
  const configs = getFrameworkConfig(framework);

  Object.entries(configs).forEach(([fileName, content]) => {
    createFileIfNotExists(path.join(rootPath, fileName), content);
  });
}

function getFrameworkConfig(framework) {
  const configs = {
    generic: {
      ".env": `# Environment Variables
NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000/api
APP_NAME="My Application"
`,
      ".env.example": `# Environment Variables Example
# Copy this file to .env and fill in the values

NODE_ENV=development
PORT=3000
API_URL=http://localhost:3000/api
APP_NAME="My Application"
`,
    },
    nextjs: {
      ".env": `# Next.js Environment Variables
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME="Next.js Application"
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
`,
      ".env.example": `# Next.js Environment Variables Example
# Copy this file to .env.local and fill in the values

NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME="Next.js Application"
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
`,
      "next.config.js": `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
`,
    },
    vite: {
      ".env": `# Vite Environment Variables
# Note: Vite uses VITE_ prefix for client-side variables

NODE_ENV=development
VITE_API_URL=http://localhost:5173/api
VITE_APP_NAME="Vite Application"
`,
      ".env.example": `# Vite Environment Variables Example
# Copy this file to .env and fill in the values

NODE_ENV=development
VITE_API_URL=http://localhost:5173/api
VITE_APP_NAME="Vite Application"
`,
    },
  };

  const shared = {
    ".eslintrc.json": `{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "prefer-const": "error"
  }
}
`,
    ".prettierrc": `{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "endOfLine": "lf"
}
`,
    ".editorconfig": `# EditorConfig: https://editorconfig.org

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.{json,yml,yaml}]
indent_size = 2
`,
  };

  return { ...configs[framework] || configs.generic, ...shared };
}

module.exports = { generateEnvConfig };
