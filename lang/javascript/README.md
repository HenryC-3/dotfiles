## npmrc

`npmrc` stores npm and pnpm settings.

## Volta

[Volta](https://volta.sh/) is a version manager for Node/npm/yarn/npm packages.

### notice

- use `vol` instead `volta` for auto backup purpose. see [solution](#solution) for detail.
- `.volta` in current directory is a **symlink** which links to Icloud.

### situation

volta currently can't backup or restore like [homebrew](../../Backup.md#homebrew), see [backlog](https://github.com/volta-cli/volta/projects/7#card-39881731) for detail.

### solution

Current solution is

1. maintaining a `.volta` file in icloud for later references.
2. generates the [toolchain](#toolchain) information after run `volta` commands.

the second part is achieved by a wrapper.Check it out in [.zshrc](../../terminal/shell/.zshrc)

```bash
vol() {
  volta "$@"
  volta list --format=plain > "${ICLOUD_HOME}/Volta/.volta"
}
```

### toolchain

toolchain are follow things installed through volta.

- npm package
- node
- npm
- yarn
