// map cmd + Zzcv to hyper + uiop

import { getJSONFIle, getKarabinerRule } from "../utils";
import { karabinerFromKey, karabinerRule, karabinerToKey } from "../types";

import { getFromKeyWithHyper, getToKey } from "../utils";
import { modifiers } from "../utils/keys";

type Key = "undo" | "redo" | "copy" | "paste";

const to: Record<Key, karabinerToKey> = {
    undo: getToKey("z", [modifiers.cmd]),
    redo: getToKey("z", [modifiers.cmd, modifiers.shift]),
    copy: getToKey("c", [modifiers.cmd]),
    paste: getToKey("v", [modifiers.cmd]),
};

const from: Record<Key, karabinerFromKey> = {
    undo: getFromKeyWithHyper("i"),
    redo: getFromKeyWithHyper("u"),
    copy: getFromKeyWithHyper("o"),
    paste: getFromKeyWithHyper("p"),
};

export async function zZcvTuiop(
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`
) {
    const rules: karabinerRule[] = [];
    Object.keys(from).forEach((key) => {
        const theKey = key as Key;
        const rule = getKarabinerRule(
            key.split(".").join("-"),
            from[theKey],
            to[theKey]
        );
        rules.push(rule);
    });
    try {
        await getJSONFIle(rules, path);
    } catch (error) {
        console.log(error);
    }
    return rules;
}
