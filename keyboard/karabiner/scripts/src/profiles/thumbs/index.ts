import { karabinerFromKey, karabinerToKey } from "../../types";
import {
    getComplexRules,
    getFromKey,
    getFromKeyWithHyper,
    getToKey,
} from "../../utils";
import { arrowKey, deleteKey, modifiers } from "../../utils/keys";

const mode = {
    select: "left_command",
    delete: "left_option",
};

type AnchorType =
    | "wordStart"
    | "wordEnd"
    | "lineStart"
    | "lineEnd"
    | "charStart"
    | "charEnd"
    | "lineUp"
    | "lineDown"
    | "pageUp"
    | "pageDown";

type AnchorDeleteType = Exclude<
    AnchorType,
    "lineUp" | "lineDown" | "pageUp" | "pageDown"
>;

type Anchor<T> = Record<AnchorType, T>;

type AnchorDelete<T> = Record<AnchorDeleteType, T>;

const leftHandAnchor: Anchor<string> = {
    wordStart: "s",
    wordEnd: "d",
    lineStart: "a",
    lineEnd: "f",
    charStart: "q",
    charEnd: "r",
    lineUp: "e",
    lineDown: "w",
    pageUp: "t",
    pageDown: "g",
};

const leftHandAnchorDelete: AnchorDelete<string> = {
    wordStart: "s",
    wordEnd: "d",
    lineStart: "a",
    lineEnd: "f",
    charStart: "q",
    charEnd: "r",
};

const toNavigation: Anchor<karabinerToKey> = {
    wordStart: getToKey(arrowKey.left, [modifiers.opt]),
    wordEnd: getToKey(arrowKey.right, [modifiers.opt]),
    lineStart: getToKey(arrowKey.left, [modifiers.cmd]),
    lineEnd: getToKey(arrowKey.right, [modifiers.cmd]),
    charStart: getToKey(arrowKey.left),
    charEnd: getToKey(arrowKey.right),
    lineUp: getToKey(arrowKey.up),
    lineDown: getToKey(arrowKey.down),
    pageUp: getToKey(arrowKey.up, [modifiers.cmd]),
    pageDown: getToKey(arrowKey.down, [modifiers.cmd]),
};

const toDelete: AnchorDelete<karabinerToKey> = {
    wordStart: getToKey(deleteKey.deleteBackward, [modifiers.opt]),
    wordEnd: getToKey(deleteKey.deleteForward, [modifiers.opt]),
    lineStart: getToKey(deleteKey.deleteBackward, [modifiers.cmd]),
    lineEnd: getToKey(deleteKey.deleteForward, [modifiers.cmd]),
    charStart: getToKey(deleteKey.deleteBackward),
    charEnd: getToKey(deleteKey.deleteForward),
};

const toSelect: Anchor<karabinerToKey> = {
    wordStart: getToKey(arrowKey.left, [modifiers.shift, modifiers.opt]),
    wordEnd: getToKey(arrowKey.right, [modifiers.shift, modifiers.opt]),
    lineStart: getToKey(arrowKey.left, [modifiers.cmd, modifiers.shift]),
    lineEnd: getToKey(arrowKey.right, [modifiers.cmd, modifiers.shift]),
    charStart: getToKey(arrowKey.left, [modifiers.shift]),
    charEnd: getToKey(arrowKey.right, [modifiers.shift]),
    lineUp: getToKey(arrowKey.up, [modifiers.shift]),
    lineDown: getToKey(arrowKey.down, [modifiers.shift]),
    pageUp: getToKey(arrowKey.up, [modifiers.cmd, modifiers.shift]),
    pageDown: getToKey(arrowKey.down, [modifiers.cmd, modifiers.shift]),
};

const fromNavigation = getFromObj(leftHandAnchor);
const fromSelect = getFromObj(leftHandAnchor, modifiers.cmd);
const fromDelete = getFromObj(leftHandAnchorDelete, modifiers.opt);

export const getRuleNavigation = () => {
    return getComplexRules(toNavigation, fromNavigation);
};
export const getRuleSelect = () => {
    return getComplexRules(toSelect, fromSelect);
};
export const getRuleDelete = () => {
    return getComplexRules(toDelete, fromDelete);
};

function getFromObj(anchor: Record<string, string>, modifier: string = "") {
    const from = {} as Record<AnchorType | AnchorDeleteType, karabinerFromKey>;
    Object.keys(anchor).map((key) => {
        const theKey = key as AnchorType | AnchorDeleteType;
        if (modifier) {
            from[theKey] = getFromKeyWithHyper(anchor[key], modifier);
        } else {
            from[theKey] = getFromKeyWithHyper(anchor[key]);
        }
    });
    return from;
}
