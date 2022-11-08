/**

| name               | press   | map to        |
| ------------------ | ------- | ------------- |
| deleteCharForward  | hyper+n | backspace     |
| deleteWordForward  | hyper+m | backspace+alt |
| deleteCharBackward | hyper+, | backspace     |
| deleteWordBackward | hyper+. | delete+alt    |

 */

import { getComplexRules } from "../utils";
import { karabinerFromKey, karabinerToKey } from "../types";

import { getToKey, getFromKey } from "../utils";
import { hyperExcludeShift, modifiers } from "../utils/keys";

type Key =
    | "deleteCharForward"
    | "deleteWordForward"
    | "deleteCharBackward"
    | "deleteWordBackward";

const to: Record<Key, karabinerToKey> = {
    deleteCharForward: getToKey("delete_or_backspace"),
    deleteWordForward: getToKey("delete_or_backspace", [modifiers.opt]),
    deleteWordBackward: getToKey("delete_forward", [modifiers.opt]),
    deleteCharBackward: getToKey("delete_forward"),
};

const from: Record<Key, karabinerFromKey> = {
    deleteCharForward: getFromKeyWithHyper("n"),
    deleteWordForward: getFromKeyWithHyper("m"),
    deleteWordBackward: getFromKeyWithHyper("comma"),
    deleteCharBackward: getFromKeyWithHyper("period"),
};

export async function mapDeleteBackspace(
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`
) {
    getComplexRules(to, from, path);
}

function getFromKeyWithHyper(keycode: string, modifier: string = "") {
    if (modifier) {
        return getFromKey(keycode, [...hyperExcludeShift, modifier]);
    }
    return getFromKey(keycode, [...hyperExcludeShift]);
}
