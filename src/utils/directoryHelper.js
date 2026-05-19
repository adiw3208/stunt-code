const fs = require("fs");
const vscode = require("vscode");

function createDirectoryIfNotExists(directoryPath) {
  try {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
      vscode.window.showInformationMessage(`Created directory: ${directoryPath}`);
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to create directory ${directoryPath}: ${error.message}`);
    throw error;
  }
}

module.exports = { createDirectoryIfNotExists };
