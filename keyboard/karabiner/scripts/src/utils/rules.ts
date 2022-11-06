import { Anchors, karabinerFromKey, karabinerToKey } from "../types";
import { modifiers, arrowKey } from "./keys";
import { preferKeys } from "./anchorKey";
import { getFromKeyWithHyper, getToKey } from "./index";

/** contains a set of keybindings for char/line/page in default keymap */
export const originNavigationRules: Anchors<karabinerToKey> = {
    char: {
        cursorMove: {
            left: getToKey(arrowKey.left),
            right: getToKey(arrowKey.right),
        },
        select: {
            left: getToKey(arrowKey.left, [modifiers.shift]),
            right: getToKey(arrowKey.right, [modifiers.shift]),
        },
    },
    word: {
        cursorMove: {
            left: getToKey(arrowKey.left, [modifiers.opt]),
            right: getToKey(arrowKey.right, [modifiers.opt]),
        },
        select: {
            left: getToKey(arrowKey.left, [modifiers.shift, modifiers.opt]),
            right: getToKey(arrowKey.right, [modifiers.shift, modifiers.opt]),
        },
    },
    lineX: {
        cursorMove: {
            start: getToKey(arrowKey.left, [modifiers.cmd]),
            end: getToKey(arrowKey.right, [modifiers.cmd]),
        },
        select: {
            start: getToKey(arrowKey.left, [modifiers.cmd, modifiers.shift]),
            end: getToKey(arrowKey.right, [modifiers.cmd, modifiers.shift]),
        },
    },
    lineY: {
        cursorMove: {
            up: getToKey(arrowKey.up),
            down: getToKey(arrowKey.down),
        },
        select: {
            prev: getToKey(arrowKey.up, [modifiers.shift]),
            next: getToKey(arrowKey.down, [modifiers.shift]),
        },
    },
    page: {
        cursorMove: {
            start: getToKey(arrowKey.up, [modifiers.cmd]),
            end: getToKey(arrowKey.down, [modifiers.cmd]),
        },
        select: {
            above: getToKey(arrowKey.up, [modifiers.cmd, modifiers.shift]),
            below: getToKey(arrowKey.down, [modifiers.cmd, modifiers.shift]),
        },
    },
};

/** contains a set of keybindings for char/line/page in karabiner keymap */
export const hyperNavigationRules: Anchors<karabinerFromKey> = {
    char: {
        /**hyper+H/L for move cursor left/right, no additional modifier key needed */
        cursorMove: {
            left: getFromKeyWithHyper(preferKeys.char.cursorMove.left),
            right: getFromKeyWithHyper(preferKeys.char.cursorMove.right),
        },
        select: {
            left: getFromKeyWithHyper(
                preferKeys.char.select.left,
                preferKeys.mode.select
            ),
            right: getFromKeyWithHyper(
                preferKeys.char.select.right,
                preferKeys.mode.select
            ),
        },
    },
    word: {
        cursorMove: {
            left: getFromKeyWithHyper(
                preferKeys.word.cursorMove.left,
                preferKeys.mode.cursorMove
            ),
            right: getFromKeyWithHyper(
                preferKeys.word.cursorMove.right,
                preferKeys.mode.cursorMove
            ),
        },
        select: {
            left: getFromKeyWithHyper(
                preferKeys.word.cursorMove.left,
                preferKeys.mode.select
            ),
            right: getFromKeyWithHyper(
                preferKeys.word.cursorMove.right,
                preferKeys.mode.select
            ),
        },
    },
    lineX: {
        cursorMove: {
            /**hyper+J/K for move cursor up/down, no additional modifier key needed */
            start: getFromKeyWithHyper(
                preferKeys.lineX.cursorMove.start,
                preferKeys.mode.cursorMove
            ),
            end: getFromKeyWithHyper(
                preferKeys.lineX.cursorMove.end,
                preferKeys.mode.cursorMove
            ),
        },
        select: {
            start: getFromKeyWithHyper(
                preferKeys.lineX.select.start,
                modifiers.opt
            ),
            end: getFromKeyWithHyper(
                preferKeys.lineX.select.end,
                modifiers.opt
            ),
        },
    },
    lineY: {
        select: {
            prev: getFromKeyWithHyper(
                preferKeys.lineY.select.prev,
                preferKeys.mode.select
            ),
            next: getFromKeyWithHyper(
                preferKeys.lineY.select.next,
                preferKeys.mode.select
            ),
        },
        cursorMove: {
            up: getFromKeyWithHyper(preferKeys.lineY.cursorMove.up),
            down: getFromKeyWithHyper(preferKeys.lineY.cursorMove.down),
        },
    },
    page: {
        cursorMove: {
            start: getFromKeyWithHyper(
                preferKeys.page.cursorMove.start,
                preferKeys.mode.cursorMove
            ),
            end: getFromKeyWithHyper(
                preferKeys.page.cursorMove.end,
                preferKeys.mode.cursorMove
            ),
        },
        select: {
            above: getFromKeyWithHyper(
                preferKeys.page.select.above,
                preferKeys.mode.select
            ),
            below: getFromKeyWithHyper(
                preferKeys.page.select.below,
                preferKeys.mode.select
            ),
        },
    },
};
