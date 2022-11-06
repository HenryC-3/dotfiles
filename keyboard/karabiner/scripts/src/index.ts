import { getJSONFIle, getKarabinerRule } from "./utils";
import { hyperNavigationRules, originNavigationRules } from "./utils/rules";
import flat from "flat";
import { karabinerFromKey, karabinerRule, karabinerToKey } from "./types";

const hyperNav = flat(hyperNavigationRules, { maxDepth: 3 }) as {
    [index: string]: karabinerFromKey;
};
const originNav = flat(originNavigationRules, { maxDepth: 3 }) as {
    [index: string]: karabinerToKey;
};

export async function getComplexRules(
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/karabiner-rules/${Date.now()}.json`
) {
    const rules: karabinerRule[] = [];
    Object.keys(hyperNav).forEach((key: string) => {
        const rule = getKarabinerRule(
            key.split(".").join("-"),
            hyperNav[key],
            originNav[key]
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
