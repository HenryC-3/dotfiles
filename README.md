## Intro

This repo contains serval dotfiles on my personal Macbook.

## Guide

-   [Workflow](#workflow): find how to add/remove/sync dotfiles.
-   [Structure](#structure): locate a specific dotfile.
-   [Homebrew](./Homebrew.md): how homebrew backed up.
-   [Dotbot](#what-dotbot-does-for-you): the inner mechanism.

## Workflow

> In case you forget, read [what dotbot dose for you?](#what-dotbot-does-for-you)

### add a new dotfile

1. move the original dotfile to current directory
    ```bash
    mv ~/.vimrc ./editor/vimrc
    ```
2. update [install.conf.yml](install.conf.yaml)
    ```yml
    - link:
      ~/.vimrc: editor/.vimrc
    ```
3. execute [install](./install) in terminal
4. do [backup](#backup)

### remove a dotfile

1. remove symlink in target directory
    ```bash
    rm ~/.vimrc
    ```
2. copy the dotfile to target directory
    ```bash
    mv ./editor/vimrc ~/.vimrc
    ```
3. remove config in [install.conf.yml](install.conf.yaml)
    ```yml
    - link:
      # ~/.vimrc: editor/.vimrc
    ```
4. execute `./install` in terminal
5. do [backup](#backup)

### backup

Normal git commit push workflow

### retrieve dotfiles on new machine

1.  Setup python and git environment, then do

    ```bash
    git clone https://github.com/HenryC-3/dotfiles.git
    cd ./dotfiles
    ```

2.  [Run dotbot](#what-dotbot-does-for-you)

    ```bash
    ./install
    ```

## What Dotbot does for you?

Dotbot dose those major jobs for you

1. Create symlinks. Dotbot create symlink based on two things
    - dotfiles in this directory
    - configuration in [install.conf.yml](install.conf.yaml)
        ```yml
        # symlink editor/.vimrc in current directory to ~/.vimrc
        - link:
        ~/.vimrc: editor/.vimrc
        ```
2. run shell command defined in [install.conf.yml](install.conf.yaml) when you run [install](./install)
    ```yml
    - shell:
          - [git submodule update --init --recursive, Installing submodules]
    ```
3. remove deprecated link in target directory
    ```yml
    - clean: ["~"]
    ```

## Structure

Use folder to organize dotfiles, each folder may containing a README for further explanation of the dotfile.

```bash
.
├── misc # anything falls out fellow categories
├── lang # version manager/package manager
│  ├── javascript
│  └── python
├── editor # neovim
├── window manager # yabai/skhd/karabiner
├── terminal
│  ├── emulator # alacritty
│  ├── feature # basic utilities like fzf/ripgrep/tmux
│  ├── shell # bash/zsh
│  └── theme # p10k
└── README.md
```

## Useful links

-   [Bootstrap your Dotfiles with dotbot - Elliot DeNolf](https://www.elliotdenolf.com/posts/bootstrap-your-dotfiles-with-dotbot): introduce the basic workflow of
    -   how to init dotbot
    -   how to set up dotfiles on an other machine
-   [Dotbot configuration references](https://github.com/anishathalye/dotbot#configuration)
