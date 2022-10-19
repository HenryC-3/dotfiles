# Setup fzf
# ---------
if [[ ! "$PATH" == */usr/local/opt/fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}/usr/local/opt/fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/usr/local/opt/fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
# ------------
source "/usr/local/opt/fzf/shell/key-bindings.zsh"

# Use rg (~/.ripgreprc) to ignore node_module
export FZF_DEFAULT_COMMAND="rg --files" # the ripgrep config https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md#configuration-file