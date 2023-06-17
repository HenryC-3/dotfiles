import {
    defaultCenteredWindowSize,
    yabai,
    terminalNotifier,
} from "./parameters.mjs";
import { isCurrentWindowFloat } from "./utils.mjs";

export async function notifySpaceId(spaceId, message) {
    // this is replaced by https://github.com/xiamaz/YabaiIndicator
    // await $`${terminalNotifier} -message ${message} -title Space-${spaceId}`
}

export async function moveWindowToSpace(spaceId) {
    await $`${yabai} -m window --space ${spaceId}`;
    await focusSpace(spaceId);
}

export async function focusSpace(spaceId) {
    await $`${yabai} -m space --focus ${spaceId}`;
}

export async function toggleWindowCenterBasic() {
    const res = await isCurrentWindowFloat();
    res
        ? await $`${yabai} -m window --toggle float && ${yabai} -m window --grid ${defaultCenteredWindowSize}`
        : await $`${yabai} -m window --toggle float`;
}

export async function toggleWindowMaximize() {
    await $`${yabai} -m window --toggle zoom-fullscreen`;
}

/**
 * @param {string} direction north south west east
 */
export async function swapWindowPosition(direction) {
    await $`${yabai} -m window --swap ${direction}`;
}

/**
 *
 * @param {string} direction right left top bottom
 * @param {*} size https://github.com/koekeishiya/yabai/wiki/Commands
 */
export async function resizeWindow(direction, size) {
    await $`${yabai} -m window --resize ${direction}:${size}`;
}
