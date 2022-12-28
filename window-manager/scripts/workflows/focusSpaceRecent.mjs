import { notifySpaceId } from "../utils/actions.mjs";
import { yabai } from "../utils/parameters.mjs";
import { getCurrentSpaceInfo } from "../utils/utils.mjs";

focusSpaceRecent()

export async function focusSpaceRecent() {
    await $`${yabai} -m space --focus recent`
    const info = await getCurrentSpaceInfo()
    notifySpaceId(info.index, `now in ${info.index}`)
}