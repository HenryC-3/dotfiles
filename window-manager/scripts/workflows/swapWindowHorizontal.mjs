import { swapWindowPosition } from "../utils/actions.mjs"

swapWindowHorizontal()

export async function swapWindowHorizontal() {
    try {
        await swapWindowPosition("east")
    } catch (error) {
        await swapWindowPosition("west")
    }
}