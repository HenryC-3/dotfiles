import { existsSync } from "fs";
import {
    getFromKeyWithHyper,
    getKarabinerRule,
} from "../../utils/getKarabinerDataStructure";
import { join } from "path";
import type { karabinerFromKey, karabinerRule } from "../../types";
import { getJSONFIle } from "../../utils/generateKarabinerJSON";

const scriptDir =
    "/Users/henry/HH-workspace/dotfile/window-manager/scripts/workflows";

// 通过该 Object 查看操作对应的快捷键
// 以 focusSpace1 为例，其快捷键为 super + 1
const keybindings = {
    super: {
        focusSpace1: "1",
        focusSpace2: "2",
        focusSpace3: "3",
        focusSpace6: "4",
        focusSpaceRecent: "tab",
        focusWindowFirst: "j",
        focusWindowCounterClockwise: "k", // prev window
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

export function getSuperWindowManagementJSON() {
    let rules = generateRules(keybindings.super, getFromKeyWithHyper);
    rules = generateRules(keybindings.superCmd, getFromKeyWithHyperCmd, rules);
    rules = generateRules(keybindings.superOpt, getFromKeyWithHyperOpt, rules);

    getJSONFIle(
        rules,
        `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`
    );
}

function generateRules(
    keybinding: Record<string, string>,
    getFromKey: (keycode: string, modifier?: string) => karabinerFromKey,
    karabinerRules: Array<karabinerRule> = []
) {
    Object.keys(keybinding).forEach((scriptName) => {
        const scriptPath = join(scriptDir, scriptName) + ".mjs";
        // 检查 window-manager/scripts 中是否存在 script
        if (isScriptExist(scriptPath)) {
            type ScriptName = keyof typeof keybinding;
            const fromObj = getFromKey(keybinding[scriptName as ScriptName]);

            const rule = getKarabinerRule(scriptName, fromObj, {
                shell_command: getShellCommand(scriptPath),
            });
            karabinerRules.push(rule);
        }
    });

    return karabinerRules;
}

function getFromKeyWithHyperCmd(keycode: string) {
    return getFromKeyWithHyper(keycode, "left_command");
}

function getFromKeyWithHyperOpt(keycode: string) {
    return getFromKeyWithHyper(keycode, "left_option");
}

function isScriptExist(path: string) {
    return existsSync(path);
}

/**
 * @description 该命令用于 karabiner 中的 `to.shell_command`，需要提供可行性命令的绝对路径，以确保脚本正常运行
 * @param absPath
 * @url [to.shell\_command | Karabiner-Elements](https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/shell-command/)
 * @url [google/zx: A tool for writing better scripts](https://github.com/google/zx#minimist-package)
 */
function getShellCommand(absPath: string) {
    return `/Users/henry/.volta/bin/zx ${absPath}`;
}
