const vscode = require("vscode");
const path = require("path");

async function quickStart(rootPath, projectType = "generic") {
  const action = await vscode.window.showQuickPick(
    [
      { label: "🚀 Start Dev Server", value: "dev" },
      { label: "📖 Open README", value: "readme" },
      { label: "🌐 Open in Browser", value: "browser" },
      { label: "📦 Install Dependencies", value: "install" },
    ],
    { placeHolder: "What would you like to do?" }
  );

  if (!action) {
    return;
  }

  switch (action.value) {
    case "dev":
      await startDevServer(rootPath, projectType);
      break;
    case "readme":
      await openReadme(rootPath);
      break;
    case "browser":
      await openInBrowser(rootPath);
      break;
    case "install":
      await installDependencies(rootPath);
      break;
  }
}

async function startDevServer(rootPath, projectType) {
  const commands = getDevCommand(rootPath, projectType);

  if (!commands) {
    vscode.window.showErrorMessage("Could not detect dev server command");
    return;
  }

  const terminal = vscode.window.createTerminal({
    name: `Stunt-Code: ${projectType}`,
    cwd: rootPath,
  });

  terminal.show();
  terminal.sendText(commands);

  vscode.window.showInformationMessage(
    `✅ Dev server starting... Run: ${commands}`
  );
}

function getDevCommand(rootPath, projectType) {
  const fs = require("fs");
  const packageJsonPath = path.join(rootPath, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      const scripts = packageJson.scripts || {};

      if (scripts.dev) return "npm run dev";
      if (scripts.start) return "npm start";
      if (scripts.serve) return "npm run serve";
    } catch (error) {
      console.error("Failed to parse package.json:", error);
    }
  }

  const defaults = {
    nextjs: "npm run dev",
    vite: "npm run dev",
    react: "npm start",
    vue: "npm run serve",
    svelte: "npm run dev",
    generic: "npx serve .",
  };

  return defaults[projectType] || defaults.generic;
}

async function openReadme(rootPath) {
  const readmePath = path.join(rootPath, "README.md");

  if (require("fs").existsSync(readmePath)) {
    const doc = await vscode.workspace.openTextDocument(readmePath);
    await vscode.window.showTextDocument(doc);
  } else {
    vscode.window.showWarningMessage("README.md not found");
  }
}

async function openInBrowser(rootPath) {
  const open = require("open");

  const indexPath = path.join(rootPath, "index.html");

  if (require("fs").existsSync(indexPath)) {
    open(indexPath);
    vscode.window.showInformationMessage("✅ Opened index.html in browser");
  } else {
    vscode.env.openExternal(vscode.Uri.parse("http://localhost:3000"));
    vscode.window.showInformationMessage("✅ Opened http://localhost:3000 in browser");
  }
}

async function installDependencies(rootPath) {
  const terminal = vscode.window.createTerminal({
    name: "Stunt-Code: Install",
    cwd: rootPath,
  });

  terminal.show();
  terminal.sendText("npm install");

  vscode.window.showInformationMessage("✅ Installing dependencies...");
}

module.exports = { quickStart };
