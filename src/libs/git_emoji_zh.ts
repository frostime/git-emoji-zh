export interface Emoji {
    readonly emoji: string;
    readonly code: string;
    readonly description: string;
    readonly name: string;
    readonly entity?: string;
    dismiss?: boolean;  // 是否隐藏
    sort?: number;      // 权重，越大越靠前
}

/**
 * 推荐方案：
 * 1. 核心 Type 遵循 Conventional Commits (feat, fix, refactor...)
 * 2. 辅助 Type 处理具体操作 (move, delete, wip)
 */
let _mojis: Array<Emoji> = [
    {
        "emoji": "✨",
        "code": ":sparkles:",
        "description": "引入新功能",
        "name": "feat",
        "sort": 100
    },
    {
        "emoji": "🐛",
        "code": ":bug:",
        "description": "修复 Bug",
        "name": "fix",
        "sort": 90
    },
    {
        "emoji": "♻️",
        "code": ":recycle:",
        "description": "代码重构 (不影响功能与 Bug)",
        "name": "refactor",
        "sort": 80
    },
    {
        "emoji": "📝",
        "code": ":memo:",
        "description": "添加/更新文档",
        "name": "docs",
        "sort": 70
    },
    {
        "emoji": "🎨",
        "code": ":art:",
        "description": "改进代码结构/格式化 (不影响逻辑)",
        "name": "style",
        "sort": 60
    },
    {
        "emoji": "⚡️",
        "code": ":zap:",
        "description": "提高性能/优化",
        "name": "perf",
        "sort": 50
    },
    {
        "emoji": "✅",
        "code": ":white_check_mark:",
        "description": "增加/修改测试",
        "name": "test",
        "sort": 40
    },
    {
        "emoji": "📦",
        "code": ":package:",
        "description": "构建过程、辅助工具、依赖变更",
        "name": "chore",
        "sort": 30
    },
    {
        "emoji": "👷",
        "code": ":construction_worker:",
        "description": "CI/CD 流程、自动化脚本修改",
        "name": "ci",
        "sort": 25
    },
    {
        "emoji": "🚧",
        "code": ":construction:",
        "description": "正在进行中的工作 (WIP)",
        "name": "wip",
        "sort": 20
    },
    {
        "emoji": "🚚",
        "code": ":truck:",
        "description": "移动文件、重命名",
        "name": "move", // 统一为英文名，方便识别
        "sort": 15
    },
    {
        "emoji": "🔥",
        "code": ":fire:",
        "description": "移除代码或文件",
        "name": "delete",
        "sort": 10
    },
    {
        "emoji": "⏪",
        "code": ":rewind:",
        "description": "版本回滚",
        "name": "revert",
        "sort": 10
    },
    {
        "emoji": "🎉",
        "code": ":tada:",
        "description": "初次提交/项目初始化",
        "name": "init",
        "sort": 5
    },
    {
        "emoji": "🔀",
        "code": ":twisted_rightwards_arrows:",
        "description": "分支合并",
        "name": "merge",
        "sort": 0
    },
    // 以下为默认隐藏项，必要时通过 dismiss 开启
    {
        "emoji": "🔧",
        "code": ":wrench:",
        "description": "修改配置文件",
        "name": "config",
        "dismiss": true
    },
    {
        "emoji": "🔖",
        "code": ":bookmark:",
        "description": "发布版本/打标签",
        "name": "tag",
        "dismiss": true
    },
];

// 处理逻辑：过滤与排序
const emojis = _mojis
    .filter(item => !item.dismiss)
    .sort((a, b) => (b.sort ?? 0) - (a.sort ?? 0));

export default emojis;

// // 设置默认值
// emojis.map((item, index) => {
//     item.dismiss = item.dismiss ?? false;
//     item.sort = item.sort ?? -index;
// });
// // 过滤掉不显示的
// emojis = emojis.filter(item => !item.dismiss);
// // @ts-ignore, 排序
// emojis.sort((a, b) => b!.sort - a!.sort);

// export default emojis;
