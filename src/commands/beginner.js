const vscode = require("vscode");
const path = require("path");
const { createFileIfNotExists } = require("../utils/fileHelper");

function beginner(rootPath) {
  createFileIfNotExists(
    path.join(rootPath, "index.html"),
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<link rel="stylesheet" href="./style.css" />\n<title>Stunt Code</title>\n</head>\n<body>\n<h1>Thank You For Using STUNT CODE 😊</h1>\n<script src="./script.js"></script>\n</body>\n</html>`
  );

  createFileIfNotExists(
    path.join(rootPath, "style.css"),
    `@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);\n * {font-family: 'Poppins', sans-serif;box-sizing: border-box;border: none;}\n body {background: #123456;color: white;display: flex;justify-content: center;align-items: center;height: 100vh;}`
  );

  createFileIfNotExists(path.join(rootPath, "script.js"), `// Use JS Here`);

  vscode.commands.executeCommand(
    "vscode.openFolder",
    vscode.Uri.file(rootPath)
  );
  vscode.window.showInformationMessage(
    "✅ Stunt-Code: Beginner |  Project Created Successfully!"
  );
}

module.exports = beginner;
