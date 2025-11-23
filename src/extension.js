const vscode = require("vscode");
const beginner = require("./commands/beginner");
const standard = require("./commands/standard");
const nextJS = require("./commands/nextJS");
const nextTS = require("./commands/nextTS");
const viteReactJS = require("./commands/viteReactJS");
const viteReactTS = require("./commands/viteReactTS");
const viteSvelteJS = require("./commands/viteSvelteJS");
const viteSvelteTS = require("./commands/viteSvelteTS");
const viteVueJS = require("./commands/viteVueJS");
const viteVueTS = require("./commands/viteVueTS");

function activate(context) {
  const commands = [
    { command: "stunt-code.beginner", callback: beginner },
    { command: "stunt-code.standard", callback: standard },
    { command: "stunt-code.nextJS", callback: nextJS },
    { command: "stunt-code.nextTS", callback: nextTS },
    { command: "stunt-code.viteReactJS", callback: viteReactJS },
    { command: "stunt-code.viteReactTS", callback: viteReactTS },
    { command: "stunt-code.viteSvelteJS", callback: viteSvelteJS },
    { command: "stunt-code.viteSvelteTS", callback: viteSvelteTS },
    { command: "stunt-code.viteVueJS", callback: viteVueJS },
    { command: "stunt-code.viteVueTS", callback: viteVueTS },
  ];

  commands.forEach(({ command, callback }) => {
    let disposable = vscode.commands.registerCommand(command, async () => {
      const selectedFolder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: "Select Folder",
      });

      if (selectedFolder && selectedFolder.length > 0) {
        callback(selectedFolder[0].fsPath);
      }
    });

    context.subscriptions.push(disposable);
  });
}

module.exports = { activate };
