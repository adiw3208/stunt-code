const vscode = require("vscode");
const beginner = require("./commands/beginner");
const standard = require("./commands/standard");
const expert = require("./commands/expert");
const nextJS = require("./commands/nextJS");
const nextTS = require("./commands/nextTS");
const viteReactJS = require("./commands/viteReactJS");
const viteReactTS = require("./commands/viteReactTS");
const viteSvelteJS = require("./commands/viteSvelteJS");
const viteSvelteTS = require("./commands/viteSvelteTS");
const viteVueJS = require("./commands/viteVueJS");
const viteVueTS = require("./commands/viteVueTS");
const { generateComponent, generatePage, generateApiRoute } = require("./commands/generateComponent");
const { quickStart } = require("./utils/quickStart");
const { generateEnvConfig } = require("./utils/envGenerator");
const { generateDockerConfig } = require("./utils/dockerGenerator");
const { executeCLICommand } = require("./utils/cliHelper");

function activate(context) {
  const commands = [
    { command: "stunt-code.beginner", callback: beginner, needsProjectName: false, isTemplate: true },
    { command: "stunt-code.standard", callback: standard, needsProjectName: false, isTemplate: true },
    { command: "stunt-code.expert", callback: expert, needsProjectName: false, isTemplate: true },
    { command: "stunt-code.nextJS", callback: nextJS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.nextTS", callback: nextTS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteReactJS", callback: viteReactJS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteReactTS", callback: viteReactTS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteSvelteJS", callback: viteSvelteJS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteSvelteTS", callback: viteSvelteTS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteVueJS", callback: viteVueJS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.viteVueTS", callback: viteVueTS, needsProjectName: true, isTemplate: true },
    { command: "stunt-code.generateComponent", callback: generateComponent, needsProjectName: false, isTemplate: false },
    { command: "stunt-code.generatePage", callback: generatePage, needsProjectName: false, isTemplate: false },
    { command: "stunt-code.generateApiRoute", callback: generateApiRoute, needsProjectName: false, isTemplate: false },
  ];

  commands.forEach(({ command, callback, needsProjectName, isTemplate }) => {
    let disposable = vscode.commands.registerCommand(command, async () => {
      if (!isTemplate) {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
          vscode.window.showErrorMessage("Please open a workspace folder first");
          return;
        }
        callback(workspaceFolders[0].uri.fsPath);
        return;
      }

      const selectedFolder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: "Select Folder",
      });

      if (!selectedFolder || selectedFolder.length === 0) {
        return;
      }

      const rootPath = selectedFolder[0].fsPath;

      let projectName = undefined;
      if (needsProjectName) {
        const userInput = await vscode.window.showInputBox({
          prompt: "Enter project name",
          placeHolder: "my-project",
          value: getDefaultProjectName(command),
          validateInput: (value) => {
            if (!value || value.trim().length === 0) {
              return "Project name cannot be empty";
            }
            if (!/^[a-z0-9\-_]+$/i.test(value)) {
              return "Project name can only contain letters, numbers, hyphens, and underscores";
            }
            return null;
          },
        });

        if (!userInput) {
          return;
        }
        projectName = userInput;
      }

      callback(rootPath, projectName);

      await postProjectSetup(rootPath, command);
    });

    context.subscriptions.push(disposable);
  });
}

async function postProjectSetup(rootPath, command) {
  const autoInstall = await vscode.window.showQuickPick(
    ["Yes", "No"],
    { placeHolder: "Install dependencies automatically? (npm install)" }
  );

  if (autoInstall === "Yes") {
    try {
      await executeCLICommand(
        "npm install",
        rootPath,
        "✅ Dependencies installed successfully!",
        "⏳ Installing dependencies... This may take a moment."
      );

      const gitInit = await vscode.window.showQuickPick(
        ["Yes", "No"],
        { placeHolder: "Initialize Git repository?" }
      );

      if (gitInit === "Yes") {
        await executeCLICommand(
          "git init",
          rootPath,
          null,
          "⏳ Initializing Git repository..."
        );

        await executeCLICommand(
          "git add .",
          rootPath,
          null,
          "⏳ Adding files to Git..."
        );

        await executeCLICommand(
          'git commit -m "Initial commit - Generated by Stunt Code"',
          rootPath,
          "✅ Git repository initialized with initial commit!",
          "⏳ Creating initial commit..."
        );
      }

      const envSetup = await vscode.window.showQuickPick(
        ["Yes", "No"],
        { placeHolder: "Generate environment configuration? (.env, ESLint, Prettier)" }
      );

      if (envSetup === "Yes") {
        const framework = command.includes("next") ? "nextjs" : "vite";
        generateEnvConfig(rootPath, framework);
        vscode.window.showInformationMessage("✅ Environment configuration generated!");
      }

      const dockerSetup = await vscode.window.showQuickPick(
        ["Yes", "No"],
        { placeHolder: "Generate Docker configuration?" }
      );

      if (dockerSetup === "Yes") {
        const framework = command.includes("next") ? "nextjs" : "vite";
        generateDockerConfig(rootPath, framework);
        vscode.window.showInformationMessage("✅ Docker configuration generated!");
      }
    } catch (error) {
      console.error("Post-setup failed:", error);
    }
  }

  const quickStartAction = await vscode.window.showQuickPick(
    ["🚀 Start Dev Server", "📖 Open README", "⏭️ Skip"],
    { placeHolder: "What would you like to do next?" }
  );

  if (quickStartAction && quickStartAction !== "⏭️ Skip") {
    const projectType = command.includes("next") ? "nextjs" : command.includes("vite") ? "vite" : "generic";
    quickStart(rootPath, projectType);
  }
}

function getDefaultProjectName(command) {
  const nameMap = {
    "stunt-code.nextJS": "nextjs-app",
    "stunt-code.nextTS": "nextjs-app-ts",
    "stunt-code.viteReactJS": "react-app",
    "stunt-code.viteReactTS": "react-app-ts",
    "stunt-code.viteSvelteJS": "svelte-app",
    "stunt-code.viteSvelteTS": "svelte-app-ts",
    "stunt-code.viteVueJS": "vue-app",
    "stunt-code.viteVueTS": "vue-app-ts",
  };
  return nameMap[command] || "my-project";
}

module.exports = { activate };
