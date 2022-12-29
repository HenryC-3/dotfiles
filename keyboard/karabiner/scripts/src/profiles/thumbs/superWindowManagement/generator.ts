import { existsSync } from "fs";
import {
    getFromKeyWithHyper,
    getKarabinerRule,
} from "../../../utils/getKarabinerDataStructure";
import { join } from "path";
import type { karabinerFromKey, karabinerRule } from "../../../types";
import { getJSONFIle } from "../../../utils/generateKarabinerJSON";
import { keybindings } from "./keybindings";

const scriptDir =
    "/Users/henry/HH-workspace/dotfile/window-manager/scripts/workflows";

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
