const { exec } = require("child_process");
const vscode = require("vscode");

function viteVueJS(rootPath) {
  const projectName = "project-vue-js";
  const command = `npx create-vite@latest ${projectName} --template vue`;
  vscode.window.showInformationMessage(
      "⏳ Stunt-Code: Creating Vite Vue JS project... Please wait."
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
      "✅ Stunt-Code: Vite Vue JS | Project Created Successfully!"
    );
  });
}

module.exports = viteVueJS;
