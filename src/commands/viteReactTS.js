const { exec } = require("child_process");
const vscode = require("vscode");

function viteReactTS(rootPath) {
  const projectName = "project-react-ts";
  const command = `npx create-vite@latest ${projectName} --template react-ts`;
  vscode.window.showInformationMessage(
      "⏳ Stunt-Code: Creating Vite React TypeScript project... Please wait."
    );
  exec(command, { cwd: rootPath }, (error) => {
    if (error) {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
      return;
    }

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(`${rootPath}/${projectName}`)
    );
    vscode.window.showInformationMessage(
      "✅ Stunt-Code: Vite React TypeScript | Project Created Successfully!"
    );
  });
}

module.exports = viteReactTS;
