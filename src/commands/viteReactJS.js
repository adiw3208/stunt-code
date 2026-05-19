const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteReactJS(rootPath, projectName = "project-react") {
  const command = `npx create-vite@latest ${projectName} --template react`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite React JS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite React JS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite React JS project:", error);
  }
}

module.exports = viteReactJS;
