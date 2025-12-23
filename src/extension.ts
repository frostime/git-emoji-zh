import * as vscode from 'vscode'
import { use_emoji } from './libs/use-emoji'
import { GitExtension, Repository } from './libs/git'
import emojis from './libs/git_emoji_zh'

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('extension.gitEmoji', (uri?) => {
        const git = getGitExtension()
        if (!git) {
            vscode.window.showErrorMessage('unable to load Git Extension')
            return
        }

        // init pick items use emoji 展现方式
        let items = emojis.map(use_emoji)

        // 显示选项列表，提示用户选择
        vscode.window.showQuickPick(items).then(function (selected) {
            if (selected) {
                // console.log(uri);
                vscode.commands.executeCommand('workbench.view.scm')
                if (uri) {
                    const targetPath = uri.rootUri?.path;
                    let selectedRepository = git.repositories.find((repository) => {
                        // return repository.rootUri.path === uri._rootUri.path
                        return repository.rootUri.path === targetPath;
                    })
                    if (selectedRepository) {
                        prefixCommit(selectedRepository, selected.label)
                    }
                } else {
                    for (let repo of git.repositories) {
                        prefixCommit(repo, selected.label)
                    }
                }
            }
        })
    })

    context.subscriptions.push(disposable)
}

function prefixCommit(repository: Repository, prefix: String) {
    repository.inputBox.value = `${prefix}${repository.inputBox.value}`
}

function getGitExtension() {
    const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git')
    const gitExtension = vscodeGit && vscodeGit.exports
    return gitExtension && gitExtension.getAPI(1)
}

// this method is called when your extension is deactivated
export function deactivate() { }
