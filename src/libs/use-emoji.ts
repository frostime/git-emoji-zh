import { Emoji } from './git_emoji_zh'

export function use_emoji(emoji: Emoji) {
    return {
        // label: `${emoji.emoji} ${emoji.description}`,
        code: emoji.code,
        emoji: emoji.emoji,
        // description: '[' + emoji.name + ']',
        label: emoji.emoji + ' ' + emoji.name,
        description: `${emoji.description}`,
    }
}
