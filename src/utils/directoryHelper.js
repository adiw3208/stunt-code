const fs = require("fs");
const vscode = require("vscode");

function createDirectoryIfNotExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    vscode.window.showInformationMessage(`Created directory: ${directoryPath}`);
  }
}

module.exports = { createDirectoryIfNotExists };
