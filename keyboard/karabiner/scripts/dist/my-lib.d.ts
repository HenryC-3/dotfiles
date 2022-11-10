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

/**

| name               | press   | map to        |
| ------------------ | ------- | ------------- |
| deleteCharForward  | hyper+n | backspace     |
| deleteWordForward  | hyper+m | backspace+alt |
| deleteCharBackward | hyper+, | backspace     |
| deleteWordBackward | hyper+. | delete+alt    |

 */
declare function mapDeleteBackspace(path?: string): Promise<void>;

declare function mapRedoUndoCopyPaste(path?: string): Promise<void>;

declare const mapHyperNavigation: (path?: string) => void;
declare const mapUndoRedoCopyPaste: typeof mapRedoUndoCopyPaste;
declare const mapBackSpaceDelete: typeof mapDeleteBackspace;
declare const mapArrow: {
    getSpaceModifier: (path?: string) => void;
    getArrow: () => void;
};
declare const thumbs: {
    getRuleNavigation: () => Promise<karabinerRule[]>;
    getRuleSelect: () => Promise<karabinerRule[]>;
    getRuleDelete: () => Promise<karabinerRule[]>;
};

export { mapArrow, mapBackSpaceDelete, mapHyperNavigation, mapUndoRedoCopyPaste, thumbs };
