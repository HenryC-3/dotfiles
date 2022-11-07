## 快速上手

vimium 是一个浏览器插件，提供了若干 vim 快捷键，用于快速操作浏览器

1. 查看 [键位](#键位)

## 初始化

-   主题: [catppuccin](https://github.com/catppuccin/vimium)

## 备份

-   导入或导出文件为 [vimium-options.json](vimium-options.json )

## 键位

### tab

-   切换 tab

    ```text
    J  Go one tab left
    K  Go one tab right

    g0        Go to the first tab
    g$        Go to the last tab

    ^         Go to previously-visited tab

    T         Search through your open tabs
    ```

-   移动 tab
    ```text
    <<        Move tab to the left
    >>        Move tab to the right
    ```
-   create/close/restore/duplicate/pin/reload tab
    ```text
    t         Create new tab
    x         Close current tab
    yt        Duplicate current tab
    <a-p>     Pin or unpin current tab
    X         Restore closed tab
    r         Reload the page
    ```
-   其他

    ```text
    <a-m>     Mute or unmute current tab
    W         Move tab to new window
    ```

### 搜索

```text
o         Open URL, bookmark or history entry
O         Open URL, bookmark or history entry in a new tab
b         Open a bookmark
B         Open a bookmark in a new tab
T         Search through your open tabs
```

### 定位

-   定位 link

    ```text
    f         Open a link in the current tab
    F         Open a link in a new tab

    /         Enter find mode
    n         Cycle forward to the next find match
    N         Cycle backward to the previous find match
    ```

-   定位文字: ctrl+f

### vim 模式

```text
i         Enter insert mode
v         Enter visual mode
V         Enter visual line mode
```

### 导航

```bash
# URL 导航
gu        Go up the URL hierarchy
gU        Go to root of current URL hierarchy
```

### 其他

```text
j, <c-e>  Scroll down
k, <c-y>  Scroll up
gg        Scroll to the top of the page
G         Scroll to the bottom of the page
d         Scroll a half page down
u         Scroll a half page up
h         Scroll left
l         Scroll right
zH        Scroll all the way to the left
zL        Scroll all the way to the right
yy        Copy the current URL to the clipboard
p         Open the clipboard's URL in the current tab
P         Open the clipboard's URL in a new tab
gi        Focus the first text input on the page
<a-f>     Open multiple links in a new tab
yf        Copy a link URL to the clipboard
[[        Follow the link labeled previous or <
]]        Follow the link labeled next or >
gf        Select the next frame on the page
gF        Select the page's main/top frame
m         Create a new mark
`         Go to a mark
ge        Edit the current URL
gE        Edit the current URL and open in a new tab
H         Go back in history
L         Go forward in history
?         Show help
gs        View page source
```
