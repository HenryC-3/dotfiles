import { Anchors } from "./rules/hypeNavigation/types";
export interface karabinerRule {
    description: string;
    from: karabinerFromKey;
    to: karabinerToKey;
    type: "basic";
}

export interface karabinerFromKey {
    key_code: string;
    modifiers?: {
        mandatory: string[];
    };
}

export interface karabinerToKey {
    key_code: string;
    modifiers?: Array<string> | string;
}

export type { Anchors };
