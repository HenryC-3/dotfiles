import { moveWindowToSpace } from "../utils/actions.mjs";

await moveWindowToSpace(3);
await notifySpaceId(3, "Workbench");
