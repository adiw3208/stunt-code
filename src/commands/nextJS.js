const { exec } = require("child_process");
const vscode = require("vscode");

function viteReactJS(rootPath) {
  const projectName = "nextjs-js";
  const command = `npx create-next-app@latest ${projectName} --js --tailwind --app --src-dir --eslint --turbopack --use-npm --import-alias "@/*" --yes`;
  vscode.window.showInformationMessage(
    "⏳ Stunt-Code: Creating Next.js (JS) project... Please wait."
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
      "✅ Stunt-Code: NextJs - JS  |  Project Created Successfully!"
    );
  });
}

module.exports = viteReactJS;
