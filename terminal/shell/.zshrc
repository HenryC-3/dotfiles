# 👀 stay close to the top for enable Powerlevel10k instant prompt
# if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
#   source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
# fi

# 👀 zoxide replacement of cd/autojump commands
eval "$(zoxide init zsh)" # https://github.com/ajeetdsouza/zoxide#step-2-add-zoxide-to-your-shell
# 👀 navi shell widget 
eval "$(starship init zsh)" # [starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!](https://github.com/starship/starship#step-2-setup-your-shell-to-use-starship)

export ZSH="/Users/henry/.oh-my-zsh"
plugins=(
  # git # git alias
  zsh-autosuggestions
  history-substring-search
  zsh-syntax-highlighting
  bgnotify # notify time-consuming tasks https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/bgnotify
  fzf # fuzzy search every thing https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fzf
  # autojump # cd familiar dir https://github.com/wting/autojump
)
# ZSH_THEME="powerlevel10k/powerlevel10k"

export VISUAL="nvim"
export EDITOR="code"
export ICLOUD_HOME="$HOME/Library/Mobile Documents/com~apple~CloudDocs"
export PATH=/usr/local/Cellar/mongodb-community-shell/4.2.0/bin:$PATH # mongodb
export VOLTA_HOME="$HOME/.volta" # volta
export PATH="$VOLTA_HOME/bin:$PATH"
export PATH=$HOME/miniconda3/bin:$PATH # miniconda3
export PATH="/usr/local/opt/openjdk/bin:$PATH" # openjdk
export PATH="/usr/local/opt/maven/bin:$PATH" # maven
export PATH="/Users/henry/.platformio/penv/bin:$PATH" # platformio
export HOMEBREW_NO_AUTO_UPDATE=1 # disable homebrew autoupdate when running `brew` command for saving time
export HOMEBREW_FORCE_BREWED_CURL=1 # fix progress bar https://github.com/Homebrew/brew/issues/5563#issuecomment-457789500 
export ROOT_SUPER_PROJECT=/Users/henry/HH-workspace
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/" # speed up electron downloading process * https://www.electronjs.org/docs/latest/tutorial/installation#custom-mirrors-and-caches


# https://npmmirror.com/
alias cnpm="npm --registry=https://registry.npmmirror.com \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npmmirror.com/mirrors/node \
--userconfig=$HOME/.cnpmrc"
alias proxy='export https_proxy=http://127.0.0.1:7890  && export http_proxy=http://127.0.0.1:7890 && export all_proxy=socks5://127.0.0.1:7890'
alias unproxy='unset all_proxy && unset https_proxy && unset http_proxy'

export https_proxy=http://127.0.0.1:7890 
export http_proxy=http://127.0.0.1:7890 
export all_proxy=socks5://127.0.0.1:7890

# update `Brewfile` in icloud after execute `brew install` or `brew install`
export HOMEBREW_BREWFILE=~/Library/Mobile\ Documents/com~apple~CloudDocs/Homebrew/Brewfile # specifiy Brewfile location
if [ -f $(brew --prefix)/etc/brew-wrap ];then # https://homebrew-file.readthedocs.io/en/latest/installation.html
  source $(brew --prefix)/etc/brew-wrap
fi

# update the volta toolchain when run volta command. # this is a temporary solution for https://github.com/volta-cli/volta/projects/7#card-39881731
vol() {
  volta "$@"
  volta list --format=plain > "${ICLOUD_HOME}/Volta/.volta"
}

source $ZSH/oh-my-zsh.sh
# [[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh # To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
