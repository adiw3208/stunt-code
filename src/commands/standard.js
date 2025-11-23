const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");
const { createDirectoryIfNotExists } = require("../utils/directoryHelper");

function standar(rootPath) {
  const folders = ["public", "assets", "src", "src/css", "src/js"];
  folders.forEach((folder) =>
    createDirectoryIfNotExists(path.join(rootPath, folder))
  );

  createFileIfNotExists(
    path.join(rootPath, "index.html"),
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<link rel="stylesheet" href="./src/css/style.css" />\n<title>Stunt Code</title>\n</head>\n<body>\n<h1>Thank You For Using STUNT CODE 😊</h1>\n<script src="./src/js/script.js"></script>\n</body>\n</html>`
  );

  createFileIfNotExists(
    path.join(rootPath, "src/js", "main.js"),
    `console.log("Hello from Stunt Code Standard!");`
  );
  createFileIfNotExists(
    path.join(rootPath, "src/css", "style.css"),
    `@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);\n * {font-family: 'Poppins', sans-serif;box-sizing: border-box;border: none;}\n body {background: #123456;color: white;display: flex;justify-content: center;align-items: center;height: 100vh;}`
  );

  vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(rootPath)
  );
  vscode.window.showInformationMessage(
    "✅ Stunt-Code: Standar |  Project Created Successfully!"
  );
}

module.exports = standar;
