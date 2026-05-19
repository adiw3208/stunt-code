const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function viteReactTS(rootPath, projectName = "project-react-ts") {
  const command = `npx create-vite@latest ${projectName} --template react-ts`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Vite React TS "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Vite React TS project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Vite React TS project:", error);
  }
}

module.exports = viteReactTS;
