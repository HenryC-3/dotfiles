/**map shift + space + HJKL to arrow */

import { karabinerCondition } from "../../types";
import {
    getComplexRules,
    getCustomModifier,
    getFromKey,
    getJSONFIle,
    getToKey,
} from "../../utils";
import { modifiers } from "../../utils/keys";

const { rule: spaceModifierRule, modifierName } = getCustomModifier("spacebar");
const conditions: Array<karabinerCondition> = [
    {
        name: modifierName,
        type: "variable_if",
        value: 1,
    },
];

const from = {
    left: getFromKey("h", [modifiers.shift]),
    down: getFromKey("j", [modifiers.shift]),
    up: getFromKey("k", [modifiers.shift]),
    right: getFromKey("l", [modifiers.shift]),
};

const to = {
    left: getToKey("left_arrow"),
    down: getToKey("down_arrow"),
    up: getToKey("up_arrow"),
    right: getToKey("right_arrow"),
};

export const getSpaceModifier = (
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`
) => {
    getJSONFIle(spaceModifierRule, path);
};

export const getArrow = () => {
    getComplexRules(
        to,
        from,
        `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`,
        conditions
    );
};
