const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function nextTS(rootPath, projectName = "nextjs-ts") {
  const command = `npx create-next-app@latest ${projectName} --ts --tailwind --app --src-dir --eslint --turbopack --use-npm --import-alias "@/*" --yes`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Next.js (TS) "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Next.js (TS) project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Next.js TS project:", error);
  }
}

module.exports = nextTS;
