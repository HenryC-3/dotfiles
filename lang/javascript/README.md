## Volta

### situation

volta currently can't backup or restore like [homebrew](../../Backup.md#homebrew)， see [backlog](https://github.com/volta-cli/volta/projects/7#card-39881731) for detail.

### solution

Current solution is

1. maintaining a `toolchain.txt` file in icloud for later references.
2. generates the toolchain information after run `volta` commands.

the second part is achieved by a wrapper.Check it out in [.zshrc](../../terminal/shell/.zshrc)

```bash
vol() {
  volta "$@"
  volta list --format=plain > "${ICLOUD_HOME}/Volta/toolchain.txt"
}
```
