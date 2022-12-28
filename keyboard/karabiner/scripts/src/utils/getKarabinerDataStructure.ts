import {
    karabinerCondition,
    karabinerFromKey,
    karabinerRuleWithCondition,
    karabinerToKey,
} from "../types";
import { hyper } from "./keys";

export function getCustomModifier(keycode: string) {
    const customModifierName = `${keycode}_modifier`;
    const rule = {
        from: {
            key_code: keycode,
        },
        to: [
            {
                set_variable: {
                    name: customModifierName,
                    value: 1,
                },
            },
        ],
        to_after_key_up: [
            {
                set_variable: {
                    name: customModifierName,
                    value: 0,
                },
            },
        ],
        to_if_alone: [
            {
                key_code: keycode,
            },
        ],
        type: "basic",
    };
    return {
        rule,
        modifierName: customModifierName,
    };
}

export function getKarabinerRule(
    desc: string,
    fromKey: karabinerFromKey,
    toKey: karabinerToKey,
    conditions: Array<karabinerCondition> = []
): karabinerRuleWithCondition {
    return {
        description: desc,
        from: fromKey,
        to: toKey,
        type: "basic",
        conditions,
    };
}

export function getToKey(keycode: string, modifiers: Array<string> = []) {
    if (modifiers.length === 0) {
        return {
            key_code: keycode,
        };
    }
    return {
        key_code: keycode,
        modifiers,
    };
}

export function getFromKey(keycode: string, modifiers: Array<string>) {
    return {
        key_code: keycode,
        modifiers: {
            mandatory: modifiers,
        },
    };
}

export function getFromKeyWithHyper(keycode: string, modifier: string = "") {
    if (modifier) {
        return getFromKey(keycode, [...hyper, modifier]);
    }
    return getFromKey(keycode, [...hyper]);
}
