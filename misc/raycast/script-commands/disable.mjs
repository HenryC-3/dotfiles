#!/usr/bin/env zx

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title disable
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon ⌨️
// @raycast.argument1 { "type": "text", "placeholder": "hideSelf" }
// @raycast.argument2 { "type": "text", "placeholder": "name" }
// @raycast.packageName Utils

// Documentation:
// @raycast.description replace mac built-in shortcut to a shortcut you may never use
// @raycast.author Henry
// @raycast.authorURL https://github.com/HenryC-3

/* ========================= forward ================================= */

/**
 * this script is use to replace a default MacOS built-in shortcut.
 * it replaces default shortcut with a shortcut you may never use which looks like you have disabled it.
 * it can be used for free the default shortcut too.
 */

/* ========================= references ================================= */

// https://www.rightpoint.com/rplabs/script-keyboard-os-x-shortcuts
// https://github.com/google/zx

/* =========================== setup ================================= */

const args = getArgs();
const strategyKey = args[0];
const appName = args[1];
const path = getPath(appName);
const id = await getIdByAppPath(path);

/* ========================= strategies ============================== */

const strategies = {
    async hideSelf() {
        const keybinding = getKeybindingHideSelf(appName);
        await addCustomShortcut(id, keybinding);
        await addToSystemPreferences(id); // add custom shortcut description to System Preferences>Keyboard Shortcut>All Application
    },
};

/* =========================== core ================================= */

try {
    strategies[strategyKey]();
} catch (error) {
    console.log(error);
}

/* =========================== utils ================================= */

function getArgs() {
    return process.argv.slice(2);
}

function getPath(name) {
    return "/Applications/" + name + ".app";
}

function getKeybindingHideSelf(name) {
    return {
        action: "Hide " + name,
        shortcut: "@^~\\U0060", // cmd+ctrl+opt+`
    };
}

async function getIdByAppPath(path) {
    const res = await $`mdls -raw -name kMDItemCFBundleIdentifier ${path}`; // https://ss64.com/osx/mdls.html
    return res;
}

async function addCustomShortcut(id, { action, shortcut }) {
    $`defaults write ${id} NSUserKeyEquivalents -dict-add ${action} ${shortcut}`;
}

async function addToSystemPreferences(id) {
    const resRaw =
        await $`defaults read com.apple.universalaccess com.apple.custommenu.apps`;
    const res = resRaw.stdout.trim();
    const isIncludeId = res.includes(id);
    console.log("res", res);
    if (!isIncludeId) {
        $`defaults write com.apple.universalaccess "com.apple.custommenu.apps" -array-add ${id}`;
    }
}
