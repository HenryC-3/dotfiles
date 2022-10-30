#!/usr/bin/env zx

import {
    isSubmodule,
    getStr,
    getSubmoduleInfo,
    updateLink,
} from "./utils/index.mjs";

const submodulePath = await $`pwd`;
const submodulePathStr = getStr(submodulePath);
const rootSuperProjectPathStr = $.env.ROOT_SUPER_PROJECT;

try {
    await autoUpdateLinkRecursively(submodulePathStr, rootSuperProjectPathStr);
} catch (error) {
    console.log(chalk.red(error));
}

/**
 * @description recursively update super-project's submodule link until reach the `rootSuperProjectPathStr`
 * @param {string} currentPathStr path
 * @param {string} rootSuperProjectPathStr
 */
async function autoUpdateLinkRecursively(
    currentPathStr,
    rootSuperProjectPathStr
) {
    const { relSubmodulePathStr, superProjectPathStr, submodulePathStr } =
        await getSubmoduleInfo(currentPathStr);

    const isCurrentPathSubmodule = await isSubmodule(currentPathStr);
    const isSuperProjectSubmodule = await isSubmodule(superProjectPathStr);

    // exit when folder is not a submodule
    if (!isCurrentPathSubmodule) {
        return;
    }

    await updateLink(
        superProjectPathStr,
        submodulePathStr,
        relSubmodulePathStr
    );

    // exit when super-project is not a submodule
    if (!isSuperProjectSubmodule) {
        return;
    }

    const isRootSuperProject = rootSuperProjectPathStr
        ? superProjectPathStr === rootSuperProjectPathStr
        : false;

    // exit when super-project is root super-project
    if (!isRootSuperProject) {
        autoUpdateLinkRecursively(superProjectPathStr, rootSuperProjectPathStr);
    }
}
