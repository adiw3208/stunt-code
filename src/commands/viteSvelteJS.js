const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteSvelteJS(rootPath, projectName = "project-svelte-js") {
  const command = `npx create-vite@latest ${projectName} --template svelte`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite Svelte JS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite Svelte JS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite Svelte JS project:", error);
  }
}

module.exports = viteSvelteJS;
