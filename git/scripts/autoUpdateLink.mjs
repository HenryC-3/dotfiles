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
    await autoUpdateLink(submodulePathStr, rootSuperProjectPathStr);
} catch (error) {
    console.log(chalk.red(error));
}

/**
 * @description recursively update super-project's submodule link until reach the `rootSuperProjectPathStr`
 * @param {string} currentPathStr path
 * @param {string} rootSuperProjectPathStr
 */
async function autoUpdateLink(
    currentPathStr,
    rootSuperProjectPathStr
) {
    const { relSubmodulePathStr, superProjectPathStr, submodulePathStr } =
        await getSubmoduleInfo(currentPathStr);

    const isCurrentPathSubmodule = await isSubmodule(currentPathStr); // exit when folder is not a submodule
    const isRootSuperProject = rootSuperProjectPathStr ? rootSuperProjectPathStr === currentPathStr : false // exit when current submodule is root super-project
    if (!isCurrentPathSubmodule || isRootSuperProject) {
        return
    }
    
    await updateLink(
        superProjectPathStr,
        submodulePathStr,
        relSubmodulePathStr
    );
}
