#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title yabai
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🪟
// @raycast.argument1 { "type": "text", "placeholder": "list | remove | add"}
// @raycast.argument2 { "type": "text", "placeholder": "title | app"}
// @raycast.argument3 { "type": "text", "placeholder": "name"}
// @raycast.packageName Window manager
// @raycast.needsConfirmation false

// Documentation:
// @raycast.description add/remove/list apps managed by yabai
// @raycast.author Henry
// @raycast.authorURL https://github.com/HenryC-3

import { createInterface } from "node:readline";
import { createReadStream } from "node:fs";
import { writeFile, readFile } from "node:fs/promises";
import path from "path";

/* =========================== setup ================================= */
const configPath = resolveHome("~/.yabairc");
const info = {
    titleHead: `yabai -m rule --add title="(`,
    appHead: `yabai -m rule --add app="^(`,
    titleEnd: `)" manage=off`,
    appEnd: `)$" manage=off`,
};

/**
 * @description object contains the txt from the ~/.yabairc
 */
const source = await getSource(configPath);
/**
 * @description transform `source` from txt to list
 */
const lists = transform(source);
/**
 * @description list contains args from raycast input
 */
let args = getArgs();
/**
 * @example get `addTitle` key based on `["add","title","Discord"]`
 */
let key = getStrategyKey(args);

/* =========================== error handing ================================= */
try {
    if (args[0] !== "remove" && args[0] !== "add" && args[0] !== "list") {
        throw new Error("first parameter must be remove, add or list");
    }
    if (args[0] !== "list" && args[1] !== "title" && args[1] !== "app") {
        throw new Error("second parameter must be title or app");
    }
    if (args[0] === "list") {
        key = "list";
    }
} catch (error) {
    console.log(error);
}

/* ================ execute different strategy base on different  ===================== */

const strategies = {
    list() {
        console.log(`following apps are not managed by yabai \n`);
        lists.apps.forEach((app) => {
            console.log(`* ${app}`);
        });
        console.log("\n");
        console.log(`following titles are not managed by yabai \n`);
        lists.titles.forEach((title) => {
            console.log(`* ${title}`);
        });
    },
    async addTitle() {
        const oldConfig = source.rawTitles;
        const newConfig = getNewConfig(
            info.titleHead,
            info.titleEnd,
            lists.titles,
            args[2],
            "add"
        );
        await replace(configPath, oldConfig, newConfig);
    },
    async addApp() {
        const oldConfig = source.rawApps;
        const newConfig = getNewConfig(
            info.appHead,
            info.appEnd,
            lists.apps,
            args[2],
            "add"
        );
        await replace(configPath, oldConfig, newConfig);
    },
    async removeApp() {
        const oldConfig = source.rawApps;
        const newConfig = getNewConfig(
            info.appHead,
            info.appEnd,
            lists.apps,
            args[2],
            "remove"
        );
        await replace(configPath, oldConfig, newConfig);
    },
    async removeTitle() {
        console.log("run removeTitle");
        const oldConfig = source.rawTitles;
        const newConfig = getNewConfig(
            info.titleHead,
            info.titleEnd,
            lists.titles,
            args[2],
            "remove"
        );
        await replace(configPath, oldConfig, newConfig);
    },
};

await strategies[key]();
console.log("you may have to restart yabai take effect by using \n");
console.log("brew service restart yabai");

/* =========================== utils ================================= */

function getStrategyKey(args) {
    const elements = args.slice(0, -1);
    return elements[0] + elements[1][0].toUpperCase() + elements[1].slice(1);
}

function getNewConfig(head, end, oldNameList, newName, mode) {
    let config = [];
    if (mode === "remove") {
        if (oldNameList.includes(newName)) {
            config = [...oldNameList];
            config.splice(oldNameList.indexOf(newName), 1);
        }
    } else {
        config = oldNameList.includes(newName)
            ? oldNameList
            : [...oldNameList, newName];
    }
    const configStr = config.join("|");
    return head + configStr + end;
}

async function replace(path, oldConfig, newConfig) {
    const data = await readFile(path, "utf8");
    const result = data.replace(oldConfig, newConfig);
    await writeFile(path, result, "utf8");
}

function getArgs() {
    return process.argv.slice(2);
}

function transform(source) {
    return {
        apps: source.rawApps
            .replace(info.appHead, "")
            .replace(info.appEnd, "")
            .split("|"),
        titles: source.rawTitles
            .replace(info.titleHead, "")
            .replace(info.titleEnd, "")
            .split("|"),
    };
}

/* https://stackoverflow.com/a/36221905/10915537 */
function resolveHome(filepath) {
    if (filepath[0] === "~") {
        return path.join(process.env.HOME, filepath.slice(1));
    }
    return filepath;
}

/* [Readline | Node.js v19.0.1 Documentation](https://nodejs.org/api/readline.html#example-read-file-stream-line-by-line) */
async function getSource(configPath) {
    const fileStream = createReadStream(configPath);

    const sources = {
        rawTitles: "",
        rawApps: "",
    };

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        if (line.includes(info.titleHead)) {
            sources.rawTitles = line;
        } else if (line.includes(info.appHead)) {
            sources.rawApps = line;
        }
    }
    return sources;
}
