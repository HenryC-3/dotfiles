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

项目结构如下所示，重点讲解标 🌟 的文件

-   [anchorKey.ts](src/utils/anchorKey.ts): 描述快捷操作及其对应键
-   [rules.ts](src/utils/rules.ts): 构造用于 karabiner.json 的对象

```bash
.
├── dist # 打包后的库
├── src
│  ├── index.ts # 库入口文件
│  ├── types.ts # 类型声明
│  └── utils
│     ├── index.ts # 工具函数
│     ├── keys.ts # 键
│     ├── anchorKey.ts # 🌟
│     └── rules.ts # 🌟
└── workbench
   ├── index.js # 导入打包后的库文件，生成文件
   └── karabiner-rules # 保存最终生成的 karabiner-rules
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

2. 描述完毕后，构建 `form` 和 `to`，详见 [rules](src/utils/rules.ts)
3. 构建完整的对象，并生成 JSON 文件。详见 [getComplexRules](https://github.com/HenryC-3/dotfiles/blob/aad3317d30cacd15514262ee9e82c2c180768735/keyboard/karabiner/scripts/src/index.ts#L12-L31)
