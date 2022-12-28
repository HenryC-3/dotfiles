import { yabai } from "./parameters.mjs";

export async function isCurrentWindowFloat() {
    const res = await getCurrentWindowInfo()
    return res["is-floating"]
}

export async function getCurrentWindowInfo() {
    const res = await $`${yabai} -m query --windows --window`
    return JSON.parse(getStr(res))
}

export async function getCurrentSpaceInfo() {
    const res = await $`${yabai} -m query --spaces --space`
    return JSON.parse(getStr(res))
}

export async function getCurrentSpaceLayout() {
    const res = await getCurrentSpaceInfo()
    return res.type
}

/**
 * @param {string} input 
 */
export function getStr(input) {
    return input.stdout.trim();
}