import { yabai } from "../utils/parameters.mjs"
import { getCurrentSpaceLayout } from "../utils/utils.mjs"

cycleWindowCounterClockwise()

/**
 * focus 上一个 window
 * 支持 bsp 和 stack layout
 * 支持 focus 到上一个 window 时，返回至最后一个 window
 */
export async function cycleWindowCounterClockwise() {
    const layout = await getCurrentSpaceLayout()
    try {
        layout === "bsp" ? await focusPrevWindowInBsp() : await focusPrevWindowInStack()
    } catch (err) {
        layout === "bsp" ? await focusLastWindowInBsp() : await focusLastWindowInStack()
    }
}


async function focusPrevWindowInStack() {
    await $`${yabai} -m window --focus stack.prev`
}

async function focusLastWindowInStack() {
    await $`${yabai} -m window --focus stack.last`
}

async function focusPrevWindowInBsp() {
    await $`${yabai} -m window --focus prev`
}

async function focusLastWindowInBsp() {
    await $`${yabai} -m window --focus last`
}