## 前提

熟悉 [Karabiner guide](../README.md)

## 快速开始

1. 安装依赖

    ```bash
    pnpm i

    npm run watch
    ```

2. 在 `scripts/workbench` 中创建任意 JS 文件并导入定义的工具函数

    ```javascript
    import { getComplexRules } from "../dist/my-lib.cjs";

    getComplexRules();
    ```

3. 上一步中的代码会生在 `scripts/workbench/karabiner-rules` 中生成类似如下结构的 JSON 文件。用于描述键位映射关系。

    ```json
    [
        {
            "description": "char-select-left",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": [
                        "right_command",
                        "right_control",
                        "right_shift",
                        "right_option"
                    ]
                }
            },
            "to": { "key_code": "left_arrow", "modifiers": ["left_shift"] },
            "type": "basic"
        }
    ]
    ```

4. 完全忘记了？阅读剩余内容

---

## 项目结构

```bash
.
├── src
│  ├── rules
│  │  ├── hypeNavigation
│  │  └── mapRedoUndoCopyPaste.ts
│  ├── types.ts
│  ├── index.ts # 入口文件
│  └── utils
│     ├── index.ts
│     └── keys.ts
└── workbench
   ├── index.js # import 文件执行操作
   └── karabiner-rules # 生成的 karabiner.json 文件
```

## 核心思路

### 前提

-   通过 karabiner.json 映射键位需要提供以下结构的 JSON 数组
-   数组中的对象代表一条映射规则
-   表示按下 `from` 中的键，会触发 `to` 中的键

```json
[
    {
        "description": "",
        "from": {},
        "to": {},
        "type": "basic"
    }
]
```

### 核心流程

1. 描述快捷操作和想要触发快捷操作的键，不包括修饰键。下方中即描述了——使用 `h/l` 来控制光标左右移动，详见 [anchorKey.ts](src/utils/anchorKey.ts)

    ```js
    const relation = {
        char: {
            cursorMove: {
                left: "h",
                right: "l",
            },
        },
    };
    ```

2. 描述完毕后，构建 `form` 和 `to`，详见 [rules](src/rules/mapRedoUndoCopyPaste.ts)
3. 构建完整的对象，并生成 JSON 文件。详见 [getComplexRules](https://github.com/HenryC-3/dotfiles/blob/5c3fdb491cfe19d6f4c7b8ae1f6dee51aa8a96d9/keyboard/karabiner/scripts/src/utils/index.ts#L5-L29)
