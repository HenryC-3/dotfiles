## tmux 插件

### 初始化

> [tmux-plugins/tpm: Tmux Plugin Manager](https://github.com/tmux-plugins/tpm#installation)

1. 克隆仓库

    ```bash
    git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
    ```

2. 在 `~/.tmux.conf` 中添加如下内容

    ```bash
    # List of plugins
    set -g @plugin 'tmux-plugins/tpm'
    set -g @plugin 'tmux-plugins/tmux-sensible'

    # Other examples:
    # set -g @plugin 'github_username/plugin_name'
    # set -g @plugin 'github_username/plugin_name#branch'
    # set -g @plugin 'git@github.com:user/plugin'
    # set -g @plugin 'git@bitbucket.com:user/plugin'

    # Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
    run '~/.tmux/plugins/tpm/tpm'
    ```

3. `ctrl+b U` 更新插件，终端输出类似以下内容即为成功

    ```bash
    "tpm" update success
    TMUX environment reloaded.
    Done, press ENTER to continue.
    ```
