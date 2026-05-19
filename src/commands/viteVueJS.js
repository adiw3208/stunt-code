const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteVueJS(rootPath, projectName = "project-vue-js") {
  const command = `npx create-vite@latest ${projectName} --template vue`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite Vue JS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite Vue JS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite Vue JS project:", error);
  }
}

module.exports = viteVueJS;
