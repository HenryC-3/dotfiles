import { hyperNavigation } from "./profiles/caplock-enhance/hypeNavigation";
import { getSpaceModifier, getArrow } from "./profiles/palmS/mapArrow";
import { mapDeleteBackspace } from "./profiles/palmS/mapDeleteBackspace";
import { mapRedoUndoCopyPaste } from "./profiles/caplock-enhance/mapRedoUndoCopyPaste";
import {
    getRuleNavigation,
    getRuleSelect,
    getRuleDelete,
} from "./profiles/thumbs/index";

export const mapHyperNavigation = hyperNavigation;
export const mapUndoRedoCopyPaste = mapRedoUndoCopyPaste;
export const mapBackSpaceDelete = mapDeleteBackspace;
export const mapArrow = {
    getSpaceModifier,
    getArrow,
};
export const thumbs = {
    getRuleNavigation,
    getRuleSelect,
    getRuleDelete,
};
