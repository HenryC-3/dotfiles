interface karabinerRule {
    description: string;
    from: karabinerFromKey;
    to: karabinerToKey;
    type: "basic";
}
interface karabinerFromKey {
    key_code: string;
    modifiers?: {
        mandatory: string[];
    };
}
interface karabinerToKey {
    key_code: string;
    modifiers?: Array<string> | string;
}

declare function getComplexRules(path?: string): Promise<karabinerRule[]>;

export { getComplexRules };
