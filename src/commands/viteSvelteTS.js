const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteSvelteTS(rootPath, projectName = "project-svelte-ts") {
  const command = `npx create-vite@latest ${projectName} --template svelte-ts`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite Svelte TS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite Svelte TS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite Svelte TS project:", error);
  }
}

module.exports = viteSvelteTS;
