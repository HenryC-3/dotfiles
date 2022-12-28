import { yabai } from "../utils/parameters.mjs";

toggleLayoutDirection()

export async function toggleLayoutDirection() {
    await $`${yabai} -m window --toggle split`
}