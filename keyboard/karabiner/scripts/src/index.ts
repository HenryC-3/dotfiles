import { hyperNavigation } from "./rules/hypeNavigation";
import { mapDeleteBackspace } from "./rules/mapDeleteBackspace";
import { mapRedoUndoCopyPaste } from "./rules/mapRedoUndoCopyPaste";

export const mapHyperNavigation = hyperNavigation;
export const mapUndoRedoCopyPaste = mapRedoUndoCopyPaste;
export const mapBackSpaceDelete = mapDeleteBackspace;
