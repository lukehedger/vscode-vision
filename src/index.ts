import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.vision', () => {
    vscode.window.showInformationMessage('Vision session started');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
