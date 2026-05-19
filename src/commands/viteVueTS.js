const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteVueTS(rootPath, projectName = "project-vue-ts") {
  const command = `npx create-vite@latest ${projectName} --template vue-ts`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite Vue TS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite Vue TS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite Vue TS project:", error);
  }
}

module.exports = viteVueTS;
