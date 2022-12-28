import { resizeWindow } from "../utils/actions.mjs"
import { defaultResizeWidth } from "../utils/parameters.mjs"

decreaseWindowWidth()

export function decreaseWindowWidth() {
    try {
        resizeWindow("right", `-${defaultResizeWidth}:0`)
    } catch (error) {
        resizeWindow("left", `${defaultResizeWidth}:0`)
    }
}