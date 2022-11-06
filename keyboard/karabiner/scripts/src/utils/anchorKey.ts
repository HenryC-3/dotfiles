import { modifiers } from "./keys";
import { Anchors } from "../types";

export type PreferKeys = Anchors<string> & {
    mode: {
        cursorMove: string;
        select: string;
    };
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
