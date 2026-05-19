const { exec } = require("child_process");
const vscode = require("vscode");

function executeCLICommand(command, cwd, successMessage, progressMessage) {
  return new Promise((resolve, reject) => {
    if (progressMessage) {
      vscode.window.showInformationMessage(progressMessage);
    }

    const process = exec(command, { cwd, maxBuffer: 1024 * 1024 * 10 });

    process.on("close", (code) => {
      if (code === 0) {
        if (successMessage) {
          vscode.window.showInformationMessage(successMessage);
        }
        resolve();
      } else {
        vscode.window.showErrorMessage(
          `Command failed with exit code ${code}: ${command}`
        );
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    process.on("error", (error) => {
      vscode.window.showErrorMessage(`Error: ${error.message}`);
      reject(error);
    });
  });
}

async function executeSequentialCommands(commands, cwd, options = {}) {
  const { showProgress = true, stopOnError = true } = options;
  const results = [];

  for (let i = 0; i < commands.length; i++) {
    const { command, successMessage, progressMessage, skipOnError = false } = commands[i];

    try {
      if (showProgress) {
        vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: progressMessage || `Step ${i + 1} of ${commands.length}`,
            cancellable: false,
          },
          async (progress) => {
            progress.report({ increment: (i / commands.length) * 100 });
          }
        );
      }

      await executeCLICommand(command, cwd, successMessage, progressMessage);
      results.push({ command, status: "success" });
    } catch (error) {
      results.push({ command, status: "failed", error });

      if (stopOnError && !skipOnError) {
        throw error;
      }
    }
  }

  return results;
}

module.exports = { executeCLICommand, executeSequentialCommands };
