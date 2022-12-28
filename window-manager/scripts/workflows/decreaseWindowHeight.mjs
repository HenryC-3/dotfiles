import { resizeWindow } from "../utils/actions.mjs"
import { defaultResizeHeight } from "../utils/parameters.mjs"

decreaseWindowHeight()

export function decreaseWindowHeight() {
    try {
        resizeWindow("top", `0:${defaultResizeHeight}`)
    } catch (error) {
        resizeWindow("bottom", `0:-${defaultResizeHeight}`)
    }
}