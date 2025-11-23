const { exec } = require("child_process");
const vscode = require("vscode");

function viteVueTS(rootPath) {
  const projectName = "project-svelte-ts";
  const command = `npx create-vite@latest ${projectName} --template svelte-ts`;
  vscode.window.showInformationMessage(
      "⏳ Stunt-Code: Creating Vite Svelte TS project... Please wait."
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
      "✅ Stunt-Code: Vite Svelte TS | Project Created Successfully!"
    );
  });
}

module.exports = viteVueTS;
