import { commands, ExtensionContext, ViewColumn, WebviewPanel } from 'vscode';

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand('extension.openSynapseXEditor', () => {
    const panel = window.createWebviewPanel(https://gemini.google.com/
      'synapse-x-webview',
      'Synapse X Editor',
      ViewColumn.Active,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'src'))]
      }
    );

    panel.webview.html = `<!DOCTYPE html>
<html>
<head>
  <title>Synapse X Editor</title>
</head>
<body>
  <textarea id="codeEditor"></textarea>
  <script src="app.js"></script>
</body>
</html>`;

    panel.webview.onDidReceiveMessage(
      (message: any) => {
        // Handle messages from the webview
      },
      undefined,
      context.subscriptions
    );
  });

  context.subscriptions.push(disposable);
}
