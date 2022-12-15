#!/usr/bin/env zx

import {
    isSubmodule,
    getStr,
    getSubmoduleInfo,
    updateLink,
    removeEnv,
} from "./utils/index.mjs";

const submodulePath = await $`pwd`;
const submodulePathStr = getStr(submodulePath);
const rootSuperProjectPathStr = $.env.ROOT_SUPER_PROJECT;

// https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables
const repositoryLocationsENV = [
    "GIT_ALTERNATE_OBJECT_DIRECTORIES",
    "GIT_OBJECT_DIRECTORY",
    "GIT_INDEX_FILE",
    "GIT_WORK_TREE",
    "GIT_CEILING_DIRECTORIES",
    "GIT_DIR"
]

// NOTE: make sure git commands execute successfully on other repos https://stackoverflow.com/questions/4043609/getting-fatal-not-a-git-repository-when-using-post-update-hook-to-execut/4532716#4532716
repositoryLocationsENV.forEach((name) => {
    removeEnv(name)
})


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
        await autoUpdateLinkRecursively(superProjectPathStr, rootSuperProjectPathStr);
    }
}
