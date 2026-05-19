const fs = require("fs");
const vscode = require("vscode");

function createFileIfNotExists(filePath, content = "") {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content, "utf-8");
      vscode.window.showInformationMessage(`Created file: ${filePath}`);
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to create file ${filePath}: ${error.message}`);
    throw error;
  }
}

module.exports = { createFileIfNotExists };
