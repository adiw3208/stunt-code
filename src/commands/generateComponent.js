const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");
const { createDirectoryIfNotExists } = require("../utils/directoryHelper");

async function generateComponent(rootPath) {
  const componentName = await vscode.window.showInputBox({
    prompt: "Enter component name",
    placeHolder: "Button",
    validateInput: (value) => {
      if (!value || value.trim().length === 0) {
        return "Component name cannot be empty";
      }
      if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
        return "Component name must start with uppercase letter and use PascalCase";
      }
      return null;
    },
  });

  if (!componentName) {
    return;
  }

  const projectType = await detectProjectType(rootPath);

  if (!projectType) {
    const selectedType = await vscode.window.showQuickPick(
      ["React", "Vue", "Svelte", "Vanilla JS"],
      { placeHolder: "Select project type" }
    );

    if (!selectedType) {
      return;
    }

    await createComponentFiles(rootPath, componentName, selectedType.toLowerCase().replace(" ", ""));
  } else {
    await createComponentFiles(rootPath, componentName, projectType);
  }
}

async function detectProjectType(rootPath) {
  const fs = require("fs");

  if (fs.existsSync(path.join(rootPath, "package.json"))) {
    const packageJson = JSON.parse(fs.readFileSync(path.join(rootPath, "package.json"), "utf-8"));
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    if (deps.react) return "react";
    if (deps.vue) return "vue";
    if (deps.svelte) return "svelte";
    if (deps.next) return "nextjs";
  }

  return null;
}

async function createComponentFiles(rootPath, componentName, type) {
  const componentDir = getComponentDirectory(rootPath, type);
  createDirectoryIfNotExists(componentDir);

  const templates = getComponentTemplate(componentName, type);

  templates.forEach(({ fileName, content }) => {
    createFileIfNotExists(path.join(componentDir, fileName), content);
  });

  vscode.window.showInformationMessage(
    `✅ Component "${componentName}" created successfully!`
  );
}

function getComponentDirectory(rootPath, type) {
  const dirs = {
    react: path.join(rootPath, "src", "components"),
    vue: path.join(rootPath, "src", "components"),
    svelte: path.join(rootPath, "src", "components"),
    nextjs: path.join(rootPath, "src", "components"),
    vanilla: path.join(rootPath, "src", "js", "components"),
  };

  return dirs[type] || path.join(rootPath, "src", "components");
}

function getComponentTemplate(name, type) {
  const templates = {
    react: [
      {
        fileName: `${name}.jsx`,
        content: `import React from 'react';
import './${name}.css';

const ${name} = () => {
  return (
    <div className="${name.toLowerCase()}">
      <h2>${name} Component</h2>
      <p>Add your component content here.</p>
    </div>
  );
};

export default ${name};
`,
      },
      {
        fileName: `${name}.css`,
        content: `.${name.toLowerCase()} {
  padding: 1rem;
  margin: 1rem 0;
}

.${name.toLowerCase()} h2 {
  margin-bottom: 0.5rem;
}
`,
      },
    ],
    vue: [
      {
        fileName: `${name}.vue`,
        content: `<template>
  <div class="${name.toLowerCase()}">
    <h2>${name} Component</h2>
    <p>Add your component content here.</p>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.${name.toLowerCase()} {
  padding: 1rem;
  margin: 1rem 0;
}

.${name.toLowerCase()} h2 {
  margin-bottom: 0.5rem;
}
</style>
`,
      },
    ],
    svelte: [
      {
        fileName: `${name}.svelte`,
        content: `<script>
  // Component logic here
</script>

<div class="${name.toLowerCase()}">
  <h2>${name} Component</h2>
  <p>Add your component content here.</p>
</div>

<style>
  .${name.toLowerCase()} {
    padding: 1rem;
    margin: 1rem 0;
  }

  .${name.toLowerCase()} h2 {
    margin-bottom: 0.5rem;
  }
</style>
`,
      },
    ],
    nextjs: [
      {
        fileName: `${name}.jsx`,
        content: `'use client';

import React from 'react';
import './${name}.css';

const ${name} = () => {
  return (
    <div className="${name.toLowerCase()}">
      <h2>${name} Component</h2>
      <p>Add your component content here.</p>
    </div>
  );
};

export default ${name};
`,
      },
      {
        fileName: `${name}.css`,
        content: `.${name.toLowerCase()} {
  padding: 1rem;
  margin: 1rem 0;
}

.${name.toLowerCase()} h2 {
  margin-bottom: 0.5rem;
}
`,
      },
    ],
    vanilla: [
      {
        fileName: `${name}.js`,
        content: `class ${name} {
  constructor(options = {}) {
    this.element = this.createElement();
    this.options = options;
  }

  createElement() {
    const div = document.createElement('div');
    div.className = '${name.toLowerCase()}';
    div.innerHTML = \`
      <h2>${name} Component</h2>
      <p>Add your component content here.</p>
    \`;
    return div;
  }

  mount(parent) {
    parent.appendChild(this.element);
  }

  unmount() {
    this.element.remove();
  }
}

export default ${name};
`,
      },
      {
        fileName: `${name}.css`,
        content: `.${name.toLowerCase()} {
  padding: 1rem;
  margin: 1rem 0;
}

.${name.toLowerCase()} h2 {
  margin-bottom: 0.5rem;
}
`,
      },
    ],
  };

  return templates[type] || templates.vanilla;
}

async function generatePage(rootPath) {
  const pageName = await vscode.window.showInputBox({
    prompt: "Enter page name",
    placeHolder: "About",
    validateInput: (value) => {
      if (!value || value.trim().length === 0) {
        return "Page name cannot be empty";
      }
      if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
        return "Page name must start with uppercase letter and use PascalCase";
      }
      return null;
    },
  });

  if (!pageName) {
    return;
  }

  const projectType = await detectProjectType(rootPath) || "vanilla";
  const pagesDir = getPagesDirectory(rootPath, projectType);
  createDirectoryIfNotExists(pagesDir);

  const pageTemplate = getPageTemplate(pageName, projectType);
  pageTemplate.forEach(({ fileName, content }) => {
    createFileIfNotExists(path.join(pagesDir, fileName), content);
  });

  vscode.window.showInformationMessage(
    `✅ Page "${pageName}" created successfully!`
  );
}

function getPagesDirectory(rootPath, type) {
  const dirs = {
    react: path.join(rootPath, "src", "pages"),
    vue: path.join(rootPath, "src", "pages"),
    svelte: path.join(rootPath, "src", "pages"),
    nextjs: path.join(rootPath, "src", "app", "[page]"),
    vanilla: path.join(rootPath, "src", "pages"),
  };

  return dirs[type] || path.join(rootPath, "src", "pages");
}

function getPageTemplate(name, type) {
  const templates = {
    react: [
      {
        fileName: `${name}.jsx`,
        content: `import React from 'react';

const ${name} = () => {
  return (
    <div className="${name.toLowerCase()}-page">
      <h1>${name} Page</h1>
      <p>Add your page content here.</p>
    </div>
  );
};

export default ${name};
`,
      },
    ],
    vue: [
      {
        fileName: `${name}.vue`,
        content: `<template>
  <div class="${name.toLowerCase()}-page">
    <h1>${name} Page</h1>
    <p>Add your page content here.</p>
  </div>
</template>

<script setup>
// Page logic here
</script>
`,
      },
    ],
    svelte: [
      {
        fileName: `${name}.svelte`,
        content: `<script>
  // Page logic here
</script>

<div class="${name.toLowerCase()}-page">
  <h1>${name} Page</h1>
  <p>Add your page content here.</p>
</div>
`,
      },
    ],
    nextjs: [
      {
        fileName: "page.jsx",
        content: `export default function ${name}() {
  return (
    <div>
      <h1>${name}</h1>
      <p>Add your page content here.</p>
    </div>
  );
}
`,
      },
      {
        fileName: "layout.jsx",
        content: `export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
`,
      },
    ],
    vanilla: [
      {
        fileName: `${name}.html`,
        content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name} - My Website</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
  <main>
    <h1>${name}</h1>
    <p>Add your page content here.</p>
  </main>
  <script src="../js/main.js"></script>
</body>
</html>
`,
      },
    ],
  };

  return templates[type] || templates.vanilla;
}

async function generateApiRoute(rootPath) {
  const routeName = await vscode.window.showInputBox({
    prompt: "Enter API route name",
    placeHolder: "users",
    validateInput: (value) => {
      if (!value || value.trim().length === 0) {
        return "Route name cannot be empty";
      }
      if (!/^[a-z][a-z0-9-]*$/.test(value)) {
        return "Route name must use lowercase kebab-case";
      }
      return null;
    },
  });

  if (!routeName) {
    return;
  }

  const isNextjs = require("fs").existsSync(path.join(rootPath, "next.config.js"));

  if (isNextjs) {
    const apiDir = path.join(rootPath, "src", "app", "api", routeName);
    createDirectoryIfNotExists(apiDir);

    createFileIfNotExists(
      path.join(apiDir, "route.js"),
      `import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ message: 'GET request to ${routeName}' });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: 'POST request to ${routeName}', data: body });
}
`
    );
  } else {
    const apiDir = path.join(rootPath, "src", "api");
    createDirectoryIfNotExists(apiDir);

    createFileIfNotExists(
      path.join(apiDir, `${routeName}.js`),
      `// API Route: ${routeName}

export async function get${routeName.charAt(0).toUpperCase() + routeName.slice(1)}(req, res) {
  res.status(200).json({ message: 'GET request to ${routeName}' });
}

export async function post${routeName.charAt(0).toUpperCase() + routeName.slice(1)}(req, res) {
  res.status(200).json({ message: 'POST request to ${routeName}', data: req.body });
}
`
    );
  }

  vscode.window.showInformationMessage(
    `✅ API route "${routeName}" created successfully!`
  );
}

module.exports = { generateComponent, generatePage, generateApiRoute };
