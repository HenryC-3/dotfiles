import {
    karabinerCondition,
    karabinerFromKey,
    karabinerRule,
    karabinerToKey,
} from "../types";
import fs from "fs";
import { getKarabinerRule } from "./getKarabinerDataStructure";

/**
 * @param path 默认为 `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Data.now()}.json`
 */

export async function getComplexRules<
    T extends { [index: string]: karabinerToKey },
    F extends { [index: string]: karabinerFromKey }
>(
    to: T,
    from: F,
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`,
    conditions: Array<karabinerCondition> = []
) {
    const rules: karabinerRule[] = [];
    Object.keys(from).forEach((key: string) => {
        const rule = getKarabinerRule(
            key.split(".").join("-"),
            from[key],
            to[key],
            conditions
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
