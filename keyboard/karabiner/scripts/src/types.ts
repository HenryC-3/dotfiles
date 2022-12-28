export interface karabinerRule {
    description: string;
    from: karabinerFromKey;
    to: karabinerToKey;
    type: "basic";
}

export interface karabinerCondition {
    name: string;
    type: "variable_if";
    value: 1 | 0;
}

export type karabinerRuleWithCondition = karabinerRule & {
    conditions: Array<karabinerCondition>;
};

export interface karabinerFromKey {
    key_code: string;
    modifiers?: {
        mandatory: string[];
    };
}

export interface karabinerToKey {
    key_code?: string;
    shell_command?: string;
    modifiers?: Array<string> | string;
}
