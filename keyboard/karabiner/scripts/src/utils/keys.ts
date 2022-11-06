import { Anchors } from "../types";

type PreferKeys = Anchors<string> & {
    mode: {
        cursorMove: string;
        select: string;
    };
};

export const hyper = [
    "right_command",
    "right_control",
    "right_shift",
    "right_option",
];
export const modifiers = {
    ctrl: "left_control",
    cmd: "left_command",
    opt: "left_option",
    shift: "left_shift",
};
export const arrowKey = {
    left: "left_arrow",
    right: "right_arrow",
    up: "up_arrow",
    down: "down_arrow",
};
export const preferKeys: PreferKeys = {
    mode: {
        cursorMove: modifiers.opt,
        select: modifiers.cmd,
    },
    char: {
        cursorMove: {
            left: "h",
            right: "l",
        },
        select: {
            left: "h",
            right: "l",
        },
    },
    word: {
        cursorMove: {
            left: "j",
            right: "k",
        },
        select: {
            left: "j",
            right: "k",
        },
    },
    lineX: {
        cursorMove: {
            start: "h",
            end: "l",
        },
        select: {
            start: "i",
            end: "o",
        },
    },
    lineY: {
        cursorMove: {
            up: "k",
            down: "j",
        },
        select: {
            prev: "i",
            next: "o",
        },
    },
    page: {
        cursorMove: {
            start: "u",
            end: "p",
        },
        select: {
            above: "u",
            below: "p",
        },
    },
};
