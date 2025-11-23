const { exec } = require("child_process");
const vscode = require("vscode");

function viteReactJS(rootPath) {
  const projectName = "project-react";
  const command = `npx create-vite@latest ${projectName} --template react`;
  vscode.window.showInformationMessage(
      "⏳ Stunt-Code: Creating Vite React JS (JS) project... Please wait."
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
      "✅ Stunt-Code: Vite React JS | Project Created Successfully!"
    );
  });
}

module.exports = viteReactJS;
