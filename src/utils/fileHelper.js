const fs = require("fs");
const vscode = require("vscode");

function createFileIfNotExists(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    vscode.window.showInformationMessage(`Created file: ${filePath}`);
  }
}

module.exports = { createFileIfNotExists };
