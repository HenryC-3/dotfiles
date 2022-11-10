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
