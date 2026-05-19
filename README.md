<h1 align="center">
  <img src="https://img.shields.io/badge/STUNT-CODE-00897B?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Stunt Code" />
</h1>

<h3 align="center">VS Code Extension for Rapid Project Scaffolding</h3>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.4.0-blue.svg?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/vscode-%5E1.98.0-orange.svg?style=flat-square" alt="VS Code" />
  <img src="https://img.shields.io/badge/downloads-10K%2B-ff69b4.svg?style=flat-square" alt="Downloads" />
</p>

<p align="center">
  <b>STUNT CODE</b> 🚀 is a VS Code Extension that automates the creation of structured project folders and files. Instead of manually setting up your project, you can generate everything instantly with a single command.
</p>

---

## ✨ Features

### 📁 Project Templates

Generate production-ready project structures with a single command:

| Template | Description | Best For |
|----------|-------------|----------|
| **Beginner** | SEO-optimized HTML/CSS/JS with semantic structure | Learning, simple websites |
| **Standard** | Professional layout with PWA support & modular CSS/JS | Portfolio, business websites |
| **Expert** | Enterprise architecture with design tokens, ES6 modules, API service | Complex applications, SaaS |
| **Next.js** | JavaScript & TypeScript with Tailwind, App Router, Turbopack | Full-stack React applications |
| **Vite + React** | JavaScript & TypeScript with React 18 | Modern SPAs, dashboards |
| **Vite + Vue** | JavaScript & TypeScript with Vue 3 | Progressive web apps |
| **Vite + Svelte** | JavaScript & TypeScript with Svelte 4 | High-performance apps |

### 🎨 Auto-Generate Commands

Create components, pages, and API routes on the fly:

| Command | Description |
|---------|-------------|
| **Generate Component** | Create React/Vue/Svelte/Vanilla JS components with styles |
| **Generate Page** | Create new pages with framework-specific routing |
| **Generate API Route** | Create API endpoints (Next.js App Router or Express-style) |

### ⚡ Post-Setup Automation

After creating a framework project, you'll be prompted for optional setup:

- 🔧 **Auto Install Dependencies** - Run `npm install` automatically
- 🌿 **Git Auto-Init** - Initialize repo with first commit
- 📝 **Environment Setup** - Generate `.env`, ESLint, Prettier configs
- 🐳 **Docker Support** - Generate `Dockerfile`, `docker-compose.yml`
- 🚀 **Quick Start** - Start dev server, open README, or launch browser

---

## 🚀 Getting Started

### Installation

1. Open VS Code
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Type `ext install stunt-code`
4. Press Enter

Or install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=AdiWahyudi.stunt-code).

### Usage

1. Open the Command Palette: `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type `Stunt-Code:` to see all available commands
3. Select your desired template
4. Choose the folder location
5. Follow the setup prompts

---

## 📋 Available Commands

### Project Templates

```
Stunt-Code: Beginner          - Basic HTML/CSS/JS with SEO
Stunt-Code: Standard          - Professional web structure
Stunt-Code: Expert            - Enterprise-grade architecture
Stunt-Code: NextJs - JS       - Next.js with JavaScript
Stunt-Code: NextJs - TS       - Next.js with TypeScript
Stunt-Code: Vite React-JS     - Vite + React (JavaScript)
Stunt-Code: Vite React-TS     - Vite + React (TypeScript)
Stunt-Code: Vite Svelte-JS    - Vite + Svelte (JavaScript)
Stunt-Code: Vite Svelte-TS    - Vite + Svelte (TypeScript)
Stunt-Code: Vite Vue-JS       - Vite + Vue (JavaScript)
Stunt-Code: Vite Vue-TS       - Vite + Vue (TypeScript)
```

### Component Generators

```
Stunt-Code: Generate Component    - Create a new UI component
Stunt-Code: Generate Page         - Create a new page
Stunt-Code: Generate API Route    - Create a new API endpoint
```

---

## 📂 Project Structures

### Beginner Template

```
project/
├── assets/
│   ├── images/
│   └── fonts/
├── index.html          # SEO-optimized with meta tags
├── style.css           # Modern CSS with variables
├── script.js           # Smooth scroll, active nav
├── robots.txt          # SEO robots configuration
└── sitemap.xml         # XML sitemap
```

### Standard Template

```
project/
├── public/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       └── utils/
│           └── helpers.js
├── index.html          # PWA-ready with manifest
├── manifest.json       # PWA configuration
├── robots.txt
└── sitemap.xml
```

### Expert Template

```
project/
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── css/
│   │   ├── base/         # reset.css, variables.css, typography.css
│   │   ├── components/   # header.css, footer.css, buttons.css
│   │   ├── layout/       # grid.css, container.css
│   │   ├── pages/        # home.css
│   │   └── utils/        # utilities.css
│   ├── js/
│   │   ├── core/         # app.js, router.js, event-manager.js
│   │   ├── components/   # UI components
│   │   ├── services/     # api.js (CRUD operations)
│   │   ├── utils/        # helpers.js, validators.js
│   │   └── store/        # State management
│   ├── templates/        # HTML templates
│   ├── partials/         # Reusable partials
│   └── data/             # config.json
├── tests/
│   ├── unit/
│   └── integration/
├── docs/
├── config/
├── manifest.json
├── robots.txt
├── sitemap.xml
└── .gitignore
```

---

## ✅ SEO Features Included

All templates come with built-in SEO optimization:

| Feature | Beginner | Standard | Expert |
|---------|:--------:|:--------:|:------:|
| Semantic HTML5 | ✅ | ✅ | ✅ |
| Meta Description | ✅ | ✅ | ✅ |
| Open Graph Tags | ✅ | ✅ | ✅ |
| Twitter Card | ✅ | ✅ | ✅ |
| Canonical URL | ✅ | ✅ | ✅ |
| robots.txt | ✅ | ✅ | ✅ |
| sitemap.xml | ✅ | ✅ | ✅ |
| JSON-LD Structured Data | ❌ | ❌ | ✅ |
| PWA Manifest | ❌ | ✅ | ✅ |
| Skip Link (A11y) | ❌ | ✅ | ✅ |
| ARIA Labels | ❌ | ✅ | ✅ |

---

## ⚙️ Requirements

Before using Stunt-Code, ensure you have:

- **VS Code** version **1.98.0** or later
- **Node.js** installed (for Vite/Next.js projects)
- **NPM** or **Yarn** for package management
- **Git** (optional, for Git Auto-Init feature)

---

## 🛠️ Configuration

This extension does not require additional settings. Simply open the Command Palette (`Ctrl + Shift + P`) and search for any `Stunt-Code:` command.

---

## 📸 Screenshots

### Project Creation Flow

```
1. Select Command  →  2. Choose Folder  →  3. Enter Project Name
4. Auto Install?   →  5. Git Init?      →  6. Env Setup?
7. Docker?         →  8. Quick Start?
```

### Component Generator

```
Stunt-Code: Generate Component
├── Enter component name (e.g., Button)
├── Auto-detects project type
├── Generates: Button.jsx + Button.css
└── Success notification!
```

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full list of changes.

### Latest: v1.4.0

- 🎨 Component Generator (React/Vue/Svelte/Vanilla)
- 📄 Page Generator with framework-specific templates
- 🔌 API Route Generator (Next.js + Express-style)
- 📦 Auto Install Dependencies
- 🌿 Git Auto-Init with first commit
- ⚙️ Environment Setup (.env, ESLint, Prettier)
- 🐳 Docker Support (Dockerfile + docker-compose)
- 🚀 Quick Start wizard

---

## 🧑‍💻 Developer

Developed by [**ADI WAHYUDI**](https://github.com/adiw3208)

Thank you for using **STUNT CODE!** 🎉
I hope this extension helps beginners set up their projects faster and easier! Happy coding! 💻✨

---

## 🌐 Socials

Stay connected and follow me on social media for updates!

| Platform | Link |
|----------|------|
| 🎮 **Discord** | [Join Server](https://discord.gg/wFybafrdzp) |
| 💼 **LinkedIn** | [Connect Here](https://linkedin.com/in/adiwhydi) |
| 🐦 **Twitter (X)** | [Follow Me](https://twitter.com/adiwhydi___) |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/adiw3208">Adi Wahyudi</a>
</p>
