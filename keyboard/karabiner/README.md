## 简介

本文档中介绍了若干通过 `karabiner.json` 配置键位的技巧。

## 快速开始

常用

-   查看键位映射
    -   [karabiner.json](./karabiner.json)>profile>0>complex-modifications>rules
    -   打开 karabiner-elements，点击左侧 complex-modifications
-   [添加复杂映射](#添加映射)
-   使用 karabiner event viewer 查看按键具体触发的键位

快速上手 karabiner

-   [熟悉 karabiner.json](#karabinerjson)
-   [查找术语](https://karabiner-elements.pqrs.org/docs/json/)
-   [查看复杂映射配置实例](https://karabiner-elements.pqrs.org/docs/json/typical-complex-modifications-examples/)

## karabiner.json

karabiner.json 结构如下，其中 rules 包含核心映射规则

```bash
-   global
-   profiles
    -   0
        -   complex_modifications
            -   parameters
            -   rules # 高频操作
    -   1
```

-   global：配置 karabiner elements app UI
-   profiles: 包含两套键位配置
    -   0: 默认配置
    -   1: 无配置
-   parameters: 按下、松开键位的响应时间
-   rules: 键位映射规则

## 添加映射

### 添加映射基础

#### 参考

-   [Use more complex rules | Karabiner-Elements](https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-complex-modifications/)

### 添加并使用自定义 modifier

#### 前言

一般情况下，modifier 指键盘上的 cmd、alt、ctrl 和 shift 四个键。自定义 modifier 指添加除以上四个键外的其他键作为 modifier 键。

#### 示例-修改 tab 为 modifier

以添加 tab 为 modifier 为例，该配置文件可以概括为下

1. 将 tab 作为 modifier
2. 单独按下 tab 时，tab 表现为 tab

```json
{
    "from": {
        "key_code": "tab"
    },
    "to": [
        {
            "set_variable": {
                "name": "tab_modifier",
                "value": 1
            }
        }
    ],
    "to_if_alone": [
        {
            "key_code": "tab"
        }
    ],
    "to_after_key_up": [
        {
            "set_variable": {
                "name": "tab_modifier",
                "value": 0
            }
        }
    ],
    "type": "basic"
},
```

#### 示例-使用 tab-modifier

下方实例中，需要注意

-   使用 tab-modifier 时，需要将 [tab-modifier](#示例-修改-tab-为-modifier) 的配置放在同一个对象中

```json
{
    "description": "use tab as modifier, and map tab+hjkl to vim arrow",
    "manipulators": [
        // tab modifier 配置
        {
            "from": {
                "key_code": "tab"
            },
            "to": [
                {
                    "set_variable": {
                        "name": "tab_modifier",
                        "value": 1
                    }
                }
            ],
            "to_after_key_up": [
                {
                    "set_variable": {
                        "name": "tab_modifier",
                        "value": 0
                    }
                }
            ],
            "type": "basic"
        },
        // 使用 tab modifier 的其他键
        {
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "tab_modifier",
                    "value": 1
                }
            ],
            "from": {
                "key_code": "h"
            },
            "to": [
                {
                    "key_code": "left_arrow"
                }
            ],
            "type": "basic"
        }
    ]
}
```

#### 参考

-   [Use any key as modifier · Issue #831 · pqrs-org/Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements/issues/831)
-   [Using non-modifier key as a modifier? · Issue #2531 · pqrs-org/Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements/issues/2531)
-   [Virtual modifier | Karabiner-Elements](https://karabiner-elements.pqrs.org/docs/json/extra/virtual-modifier/)
