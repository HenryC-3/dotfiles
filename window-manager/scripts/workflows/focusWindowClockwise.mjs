import { yabai } from "../utils/parameters.mjs"
import { getCurrentSpaceLayout } from "../utils/utils.mjs"

cycleWindowClockwise()

/**
 * focus 下一个 window
 * 支持 bsp 和 stack layout
 * 支持 focus 到最后一个 window 时，返回至第一个 window
 */
export async function cycleWindowClockwise() {
    const layout = await getCurrentSpaceLayout()
    try {
        layout === "bsp" ? await focusNextWindowInBsp() : await focusNextWindowInStack()
    } catch (err) {
        console.log("test")
        layout === "bsp" ? await focusFirstWindowInBsp() : await focusFirstWindowInStack()
    }
}

async function focusNextWindowInStack() {
    await $`${yabai} -m window --focus stack.next`
}

async function focusFirstWindowInStack() {
    await $`${yabai} -m window --focus stack.first`
}

async function focusNextWindowInBsp() {
    await $`${yabai} -m window --focus next`
}

async function focusFirstWindowInBsp() {
    await $`${yabai} -m window --focus first`
}