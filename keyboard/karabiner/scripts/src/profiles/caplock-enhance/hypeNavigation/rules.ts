import { karabinerFromKey, karabinerToKey } from "../../../types";
import { modifiers, arrowKey } from "../../../utils/keys";
import { rightHand } from "./anchorKey";
import { Anchors } from "./types";
import { getFromKeyWithHyper, getToKey } from "../../../utils/index";

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
            left: getFromKeyWithHyper(rightHand.char.cursorMove.left),
            right: getFromKeyWithHyper(rightHand.char.cursorMove.right),
        },
        select: {
            left: getFromKeyWithHyper(
                rightHand.char.select.left,
                rightHand.mode.select
            ),
            right: getFromKeyWithHyper(
                rightHand.char.select.right,
                rightHand.mode.select
            ),
        },
    },
    word: {
        cursorMove: {
            left: getFromKeyWithHyper(
                rightHand.word.cursorMove.left,
                rightHand.mode.cursorMove
            ),
            right: getFromKeyWithHyper(
                rightHand.word.cursorMove.right,
                rightHand.mode.cursorMove
            ),
        },
        select: {
            left: getFromKeyWithHyper(
                rightHand.word.cursorMove.left,
                rightHand.mode.select
            ),
            right: getFromKeyWithHyper(
                rightHand.word.cursorMove.right,
                rightHand.mode.select
            ),
        },
    },
    lineX: {
        cursorMove: {
            /**hyper+J/K for move cursor up/down, no additional modifier key needed */
            start: getFromKeyWithHyper(
                rightHand.lineX.cursorMove.start,
                rightHand.mode.cursorMove
            ),
            end: getFromKeyWithHyper(
                rightHand.lineX.cursorMove.end,
                rightHand.mode.cursorMove
            ),
        },
        select: {
            start: getFromKeyWithHyper(
                rightHand.lineX.select.start,
                modifiers.opt
            ),
            end: getFromKeyWithHyper(rightHand.lineX.select.end, modifiers.opt),
        },
    },
    lineY: {
        select: {
            prev: getFromKeyWithHyper(
                rightHand.lineY.select.prev,
                rightHand.mode.select
            ),
            next: getFromKeyWithHyper(
                rightHand.lineY.select.next,
                rightHand.mode.select
            ),
        },
        cursorMove: {
            up: getFromKeyWithHyper(rightHand.lineY.cursorMove.up),
            down: getFromKeyWithHyper(rightHand.lineY.cursorMove.down),
        },
    },
    page: {
        cursorMove: {
            start: getFromKeyWithHyper(
                rightHand.page.cursorMove.start,
                rightHand.mode.cursorMove
            ),
            end: getFromKeyWithHyper(
                rightHand.page.cursorMove.end,
                rightHand.mode.cursorMove
            ),
        },
        select: {
            above: getFromKeyWithHyper(
                rightHand.page.select.above,
                rightHand.mode.select
            ),
            below: getFromKeyWithHyper(
                rightHand.page.select.below,
                rightHand.mode.select
            ),
        },
    },
};
