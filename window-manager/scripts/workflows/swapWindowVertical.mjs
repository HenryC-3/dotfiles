import { swapWindowPosition } from "../utils/actions.mjs"

swapWindowUp()

export async function swapWindowUp() {
    try {
        await swapWindowPosition("north")
    } catch (error) {
        await swapWindowPosition("south")
    }
}