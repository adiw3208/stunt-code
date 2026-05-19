const vscode = require("vscode");
const { executeCLICommand } = require("../utils/cliHelper");

async function nextJS(rootPath, projectName = "nextjs-js") {
  const command = `npx create-next-app@latest ${projectName} --js --tailwind --app --src-dir --eslint --turbopack --use-npm --import-alias "@/*" --yes`;
  const projectPath = `${rootPath}/${projectName}`;

  try {
    await executeCLICommand(
      command,
      rootPath,
      `✅ Stunt-Code: Next.js (JS) "${projectName}" created successfully!`,
      `⏳ Stunt-Code: Creating Next.js (JS) project "${projectName}"... Please wait.`
    );

    vscode.commands.executeCommand(
      "vscode.openFolder",
      vscode.Uri.file(projectPath)
    );
  } catch (error) {
    console.error("Failed to create Next.js project:", error);
  }
}

module.exports = nextJS;
