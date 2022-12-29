/**
 * keybindings 对象描述了不同 modifier 下，各个窗口管理脚本对应的 key
 * 例如，focusSpace1 脚本对应的快捷键为 super + 1
 * 窗口管理脚本位于 ./window-manager/scripts/workflows
 */
export const keybindings = {
    super: {
        focusSpace1: "1",
        focusSpace2: "2",
        focusSpace3: "3",
        focusSpace6: "4",
        focusSpaceRecent: "tab",
        focusWindowFirst: "j",
        focusWindowCounterClockwise: "k",
        focusWindowClockwise: "l", // next window
    },
    superCmd: {
        moveWindowToSpace1: "1",
        moveWindowToSpace2: "2",
        moveWindowToSpace3: "3",
        moveWindowToSpace6: "4",
        swapWindowVertical: "k",
        swapWindowHorizontal: "l",
        toggleLayoutType: "tab",
    },
    superOpt: {
        // rotateLayout: "n",
        // toggleLayoutDirection: "x",
        // toggleLayoutEvenly: "b",
        // toggleWindowCenter: "c",
        decreaseWindowHeight: "j",
        decreaseWindowWidth: "k",
        increaseWindowHeight: "semicolon",
        increaseWindowWidth: "l",
    },
};
