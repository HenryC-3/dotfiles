import { getCurrentSpaceLayout } from "../utils/utils.mjs";
import { yabai } from "../utils/parameters.mjs";

toggleLayoutType()

export async function toggleLayoutType() {
    const layout = await getCurrentSpaceLayout()
    layout === "bsp" ? setLayout("stack") : setLayout("bsp")
}

async function setLayout(type) {
    await $`${yabai} -m space --layout ${type}`
}