import { getComplexRules } from "../../../utils";
import { hyperNavigationRules, originNavigationRules } from "./rules";
import flat from "flat";
import { karabinerFromKey, karabinerToKey } from "../../../types";

const from = flat(hyperNavigationRules, { maxDepth: 3 }) as {
    [index: string]: karabinerFromKey;
};
const to = flat(originNavigationRules, { maxDepth: 3 }) as {
    [index: string]: karabinerToKey;
};

export const hyperNavigation = (
    path: string = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`
) => {
    getComplexRules(to, from, path);
};
