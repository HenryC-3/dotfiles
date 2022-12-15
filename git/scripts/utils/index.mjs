/**
 * @description Determine if the current folder is a git repository
 * @param {string | undefined} absPath The absolute path of a git repository
 */
export async function isSubmodule(absPath) {
    if (absPath) {
        const result =
            await $`env -i git -C ${absPath} rev-parse --show-superproject-working-tree`;
        return Boolean(getStr(result));
    }
    return false;
}

/**
 * @param {string} submodulePathStr
 * @returns {{relSubmodulePathStr: string, superProjectPathStr:string, submodulePathStr:string}} a object contains some information related to current submodule
 */
export async function getSubmoduleInfo(submodulePathStr) {
    const superProjectPath =
        await $`env -i git -C ${submodulePathStr} rev-parse --show-superproject-working-tree`;

    const superProjectPathStr = getStr(superProjectPath);
    const relSubmodulePathStr = submodulePathStr.replace(
        superProjectPathStr + "/",
        ""
    );
    return {
        relSubmodulePathStr,
        superProjectPathStr,
        submodulePathStr,
    };
}

/**
 * @param {ProcessOutput} input [ProcessOutput](https://github.com/google/zx#processoutput)
 * @returns {string}
 */
export function getStr(input) {
    return input.stdout.trim(); // replace failed because input.stdout contains \n in the end
}

/**
 * @param {ProcessOutput} input [ProcessOutput](https://github.com/google/zx#processoutput)
 * @returns {string}
 */
export function isGitCmdSuccess(input) {
    return input.exitCode === 0; // 0 for success
}

/**
 * @description auto add; commit and push changes about current submodule in super-project
 * @param {string} superProjectPathStr
 * @param {string} submodulePathStr
 * @param {string} relSubmodulePathStr
 */
export async function updateLink(
    superProjectPathStr,
    submodulePathStr,
    relSubmodulePathStr
) {
    const updateMsg = `auto update: ${relSubmodulePathStr}/`;
    echo("-----------------------------update start-----------------------------")
    await $`env -i git -C ${superProjectPathStr} add ${submodulePathStr}`;
    await $`env -i git -C ${superProjectPathStr} commit -m ${updateMsg}`;
    try {
        await $`env -i git -C ${superProjectPathStr} push origin master`;
    } catch (error) {
        console.log(chalk.yellow(error));
    }
    echo("-----------------------------update end-----------------------------")
}
