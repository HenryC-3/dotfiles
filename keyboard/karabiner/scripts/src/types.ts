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

export interface Anchors<T> {
    char: {
        cursorMove: {
            left: T;
            right: T;
        };
        select: {
            left: T;
            right: T;
        };
    };
    word: {
        cursorMove: {
            left: T;
            right: T;
        };
        select: {
            left: T;
            right: T;
        };
    };
    lineX: {
        cursorMove: {
            start: T;
            end: T;
        };
        select: {
            start: T;
            end: T;
        };
    };
    lineY: {
        cursorMove: {
            up: T;
            down: T;
        };
        select: {
            prev: T;
            next: T;
        };
    };
    page: {
        cursorMove: {
            start: T;
            end: T;
        };
        select: {
            above: T;
            below: T;
        };
    };
}
