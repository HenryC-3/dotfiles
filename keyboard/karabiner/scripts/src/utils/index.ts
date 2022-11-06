import fs from "fs";
import { karabinerFromKey, karabinerRule, karabinerToKey } from "../types";
import { hyper } from "./keys";

export function getKarabinerRule(
    desc: string,
    fromKey: karabinerFromKey,
    toKey: karabinerToKey
): karabinerRule {
    return {
        description: desc,
        from: fromKey,
        to: toKey,
        type: "basic",
    };
}

/**
 * https://stackoverflow.com/a/31777314/10915537
 */
export async function getJSONFIle(data: Object, path: string) {
    await fs.writeFile(
        path,
        JSON.stringify(data),
        { flag: "wx" },
        function (err) {
            if (err) throw err;
            console.log(`File saved in ${path}`);
        }
    );
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
