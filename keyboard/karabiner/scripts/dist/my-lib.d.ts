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

export { mapBackSpaceDelete, mapHyperNavigation, mapUndoRedoCopyPaste };
