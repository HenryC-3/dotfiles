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

declare function zZcvTuiop(path?: string): Promise<karabinerRule[]>;

declare function getComplexRules(path?: string): Promise<karabinerRule[]>;
declare const mapUndoRedoCopyPaste: typeof zZcvTuiop;

export { getComplexRules, mapUndoRedoCopyPaste };
