# Homebrew

## Setting

Update `Brewfile` in icloud after execute `brew install` or `brew install` use [Homebrew-file](https://homebrew-file.readthedocs.io/en/latest/getting_started.html).

Homebrew-file created a wrapper on homebrew, checkout in [.zshrc](terminal/shell/.zshrc)

## Workflow

> icloud must be setup before you start

### Init

Create `Brewfile` in icloud which contains all the apps and packages installed on current Mac

    ```bash
    brew tap Homebrew/bundle
    brew bundle dump --file=/Users/henry/Library/Mobile\ Documents/com~apple~CloudDocs/Homebrew/Brewfile --force
    ```

### Restore

Restore apps and packages on a new machine.

```bash
brew bundle install --file=/Users/henry/Library/Mobile\ Documents/com~apple~CloudDocs/Homebrew/Brewfile
```

## Reference

-   [Brew Bundle Brewfile Tips](https://gist.github.com/ChristopherA/a579274536aab36ea9966f301ff14f3f)
-   [Getting Started — Homebrew-file 8.5.6 documentation](https://homebrew-file.readthedocs.io/en/latest/getting_started.html)
