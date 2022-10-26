## P10k

-   [romkatv/powerlevel10k: A Zsh theme](https://github.com/romkatv/powerlevel10k#does-powerlevel10k-always-render-exactly-the-same-prompt-as-powerlevel9k-given-the-same-config)

### git status indicator

```text
feature:master wip ⇣42⇡42 ⇠42⇢42 *42 merge ~42 +42 !42 ?42
```

| Symbol    | Meaning                                                              | Source                                                        |
| --------- | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| `feature` | current branch; replaced with `#tag` or `@commit` if not on a branch | `git status --ignore-submodules=dirty`                        |
| `master`  | remote tracking branch; only shown if different from local branch    | `git rev-parse --abbrev-ref --symbolic-full-name @{upstream}` |
| `wip`     | the latest commit's summary contains "wip" or "WIP"                  | `git show --pretty=%s --no-patch HEAD`                        |
| `⇣42`     | this many commits behind the remote                                  | `git rev-list --right-only --count HEAD...@{upstream}`        |
| `⇡42`     | this many commits ahead of the remote                                | `git rev-list --left-only --count HEAD...@{upstream}`         |
| `⇠42`     | this many commits behind the push remote                             | `git rev-list --right-only --count HEAD...@{push}`            |
| `⇢42`     | this many commits ahead of the push remote                           | `git rev-list --left-only --count HEAD...@{push}`             |
| `*42`     | this many stashes                                                    | `git stash list`                                              |
| `merge`   | repository state                                                     | `git status --ignore-submodules=dirty`                        |
| `~42`     | this many merge conflicts                                            | `git status --ignore-submodules=dirty`                        |
| `+42`     | this many staged changes                                             | `git status --ignore-submodules=dirty`                        |
| `!42`     | this many unstaged changes                                           | `git status --ignore-submodules=dirty`                        |
| `?42`     | this many untracked files                                            | `git status --ignore-submodules=dirty`                        |

### issue

-   p10k don't support `POWERLEVEL9K_VCS_SHOW_SUBMODULE_DIRTY=true`, but I use git submodule a lot in [HenryC-3/repo-management-toolkit](https://github.com/HenryC-3/repo-management-toolkit)
