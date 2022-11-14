## 简介

该文件夹下包含若干借助 `cron` 定时执行的脚本。如果无法运行，在当前文件夹下执行 `chmod +x ./**`

## 工作流

### 配置执行频率

> 使用 [Crontab.guru](https://crontab.guru/) 编写或阅读执行频率

1. `crontab -e` 打开配置文件
2. 修改文件中形如 `0 12 * * *` 的部分，该部分记录了脚本执行频率

下方配置表示，会在每天 12 点执行目标路径下的脚本。

```text
0 12 * * *  ~/HH-workspace/dotfile/scheduled-tasks/backup-config-to-icloud.mjs
```

### 查看定时任务

```bash
crontab -l # 查看所有定时任务
```

### 编辑定时任务

```bash
crontab -e # 编辑定时任务文件，默认使用 nvim，配置详见 https://github.com/HenryC-3/dotfiles/blob/726b4dcd08bba3de952611dede5173a901737cf6/terminal/shell/。zshrc#L23
```
