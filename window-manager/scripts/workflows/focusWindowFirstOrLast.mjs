import { terminalNotifier, yabai } from "../utils/parameters.mjs"
import { getCurrentSpaceLayout } from "../utils/utils.mjs"

focusWindowFirstOrLast()

/**
 * 支持 bsp 和 stack layout
 */
export async function focusWindowFirstOrLast() {
    const layout = await getCurrentSpaceLayout()
    layout === "bsp" ? await $`${yabai} -m window --focus first` : await f$`${yabai} -m window --focus stack.first`
    await $`${terminalNotifier} -message "now in first window" -title "First Window"`
}