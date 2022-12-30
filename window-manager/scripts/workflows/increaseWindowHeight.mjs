import { resizeWindow } from "../utils/actions.mjs"
import { defaultResizeHeight } from "../utils/parameters.mjs"

increaseWindowHeight()

export async function increaseWindowHeight() {
    try {
        await resizeWindow("top", `0:-${defaultResizeHeight}`)
    } catch (error) {
        await resizeWindow("bottom", `0:${defaultResizeHeight}`)
    }
}