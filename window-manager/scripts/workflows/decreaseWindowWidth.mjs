import { resizeWindow } from "../utils/actions.mjs"
import { defaultResizeWidth } from "../utils/parameters.mjs"

decreaseWindowWidth()

export async function decreaseWindowWidth() {
    try {
        await resizeWindow("right", `-${defaultResizeWidth}:0`)
    } catch (error) {
        await resizeWindow("left", `${defaultResizeWidth}:0`)
    }
}