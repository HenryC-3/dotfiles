import { camelCase, noCase } from "change-case";

export const source = {
    "Scroll down": "c-e>",
    "Scroll up": "k, <c-y>",
    "Scroll to the top of the page": "gg",
    "Scroll to the bottom of the page": "G",
    "Scroll half page down": "d",
    "Scroll half page up": "u",
    "Scroll left": "h",
    "Scroll right": "l",
    "Scroll all the way to the left": "zH",
    "Scroll all the way to the right": "zL",
    "Reload the page": "r",
    "Copy the current URL to the clipboard": "yy",
    "Open the clipboard URL in the current tab": "p",
    "Open the clipboard URL in new tab": "P",
    "Go up the URL hierarchy": "gu",
    "Go to root of current URL hierarchy": "gU",
    "Enter insert mode": "i",
    "Enter visual mode": "v",
    "Enter visual line mode": "V",
    "Focus the first text input on the page": "gi",
    "Open link in the current tab": "f",
    "Open link in new tab": "F",
    "Open multiple links in new tab": "<a-f>",
    "Copy link URL to the clipboard": "yf",
    "Follow the link labeled previous or <": "[[",
    "Follow the link labeled next or >": "]]",
    "Select the next frame on the page": "gf",
    "Select the page main/top frame": "gF",
    "Create new mark": "m",
    "Go to mark": "`",
    "Open URL, bookmark or history entry": "o",
    "Open URL, bookmark or history entry in new tab": "O",
    "Open bookmark": "b",
    "Open bookmark in new tab": "B",
    "Search through your open tabs": "T",
    "Edit the current URL": "ge",
    "Edit the current URL and open in new tab": "gE",
    "Enter find mode": "/",
    "Cycle forward to the next find match": "n",
    "Cycle backward to the previous find match": "N",
    "Go back in history": "H",
    "Go forward in history": "L",
    "Create new tab": "t",
    "Go one tab left": "J, gT",
    "Go one tab right": "K, gt",
    "Go to previously-visited tab": "^",
    "Go to the first tab": "g0",
    "Go to the last tab": "g$",
    "Duplicate current tab": "yt",
    "Pin or unpin current tab": "<a-p>",
    "Mute or unmute current tab": "<a-m>",
    "Close current tab": "x",
    "Restore closed tab": "X",
    "Move tab to new window": "W",
    "Move tab to the left": "<<",
    "Move tab to the right": ">>",
    "Show help": "?",
    "View page source": "gs",
};

export function format(source) {
    const keymapCamelCase = {};
    Object.keys(source).forEach((key) => {
        keymapCamelCase[camelCase(key)] = source[key];
    });
    return keymapCamelCase;
}

export function adapterKeyValue(source) {
    const keymap = {};
    Object.keys(source).forEach((key) => {
        keymap[key] = {
            description: noCase(key),
            key: source[key],
            tags: [],
        };
    });
    return keymap;
}

export function adapterJSON(source) {
    const keymap = [];
    Object.keys(source).forEach((key) => {
        keymap.push({
            description: noCase(key),
            key: source[key],
            tags: [],
        });
    });
    return keymap;
}
