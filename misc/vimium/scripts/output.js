/**
 * import { adapter, format, source } from "./adapter.js";
 * const keymap = adapter(format(source));
 * console.log(keymap);
 */
const keymapKeyValue = {
    scrollDown: { description: "scroll down", key: "c-e>", tags: [] },
    scrollUp: { description: "scroll up", key: "k, <c-y>", tags: [] },
    scrollToTheTopOfThePage: {
        description: "scroll to the top of the page",
        key: "gg",
        tags: [],
    },
    scrollToTheBottomOfThePage: {
        description: "scroll to the bottom of the page",
        key: "G",
        tags: [],
    },
    scrollHalfPageDown: {
        description: "scroll half page down",
        key: "d",
        tags: [],
    },
    scrollHalfPageUp: {
        description: "scroll half page up",
        key: "u",
        tags: [],
    },
    scrollLeft: { description: "scroll left", key: "h", tags: [] },
    scrollRight: { description: "scroll right", key: "l", tags: [] },
    scrollAllTheWayToTheLeft: {
        description: "scroll all the way to the left",
        key: "zH",
        tags: [],
    },
    scrollAllTheWayToTheRight: {
        description: "scroll all the way to the right",
        key: "zL",
        tags: [],
    },
    reloadThePage: { description: "reload the page", key: "r", tags: [] },
    copyTheCurrentUrlToTheClipboard: {
        description: "copy the current url to the clipboard",
        key: "yy",
        tags: [],
    },
    openTheClipboardUrlInTheCurrentTab: {
        description: "open the clipboard url in the current tab",
        key: "p",
        tags: [],
    },
    openTheClipboardUrlInNewTab: {
        description: "open the clipboard url in new tab",
        key: "P",
        tags: [],
    },
    goUpTheUrlHierarchy: {
        description: "go up the url hierarchy",
        key: "gu",
        tags: [],
    },
    goToRootOfCurrentUrlHierarchy: {
        description: "go to root of current url hierarchy",
        key: "gU",
        tags: [],
    },
    enterInsertMode: { description: "enter insert mode", key: "i", tags: [] },
    enterVisualMode: { description: "enter visual mode", key: "v", tags: [] },
    enterVisualLineMode: {
        description: "enter visual line mode",
        key: "V",
        tags: [],
    },
    focusTheFirstTextInputOnThePage: {
        description: "focus the first text input on the page",
        key: "gi",
        tags: [],
    },
    openLinkInTheCurrentTab: {
        description: "open link in the current tab",
        key: "f",
        tags: [],
    },
    openLinkInNewTab: {
        description: "open link in new tab",
        key: "F",
        tags: [],
    },
    openMultipleLinksInNewTab: {
        description: "open multiple links in new tab",
        key: "<a-f>",
        tags: [],
    },
    copyLinkUrlToTheClipboard: {
        description: "copy link url to the clipboard",
        key: "yf",
        tags: [],
    },
    followTheLinkLabeledPreviousOr: {
        description: "follow the link labeled previous or",
        key: "[[",
        tags: [],
    },
    followTheLinkLabeledNextOr: {
        description: "follow the link labeled next or",
        key: "]]",
        tags: [],
    },
    selectTheNextFrameOnThePage: {
        description: "select the next frame on the page",
        key: "gf",
        tags: [],
    },
    selectThePageMainTopFrame: {
        description: "select the page main top frame",
        key: "gF",
        tags: [],
    },
    createNewMark: { description: "create new mark", key: "m", tags: [] },
    goToMark: { description: "go to mark", key: "`", tags: [] },
    openUrlBookmarkOrHistoryEntry: {
        description: "open url bookmark or history entry",
        key: "o",
        tags: [],
    },
    openUrlBookmarkOrHistoryEntryInNewTab: {
        description: "open url bookmark or history entry in new tab",
        key: "O",
        tags: [],
    },
    openBookmark: { description: "open bookmark", key: "b", tags: [] },
    openBookmarkInNewTab: {
        description: "open bookmark in new tab",
        key: "B",
        tags: [],
    },
    searchThroughYourOpenTabs: {
        description: "search through your open tabs",
        key: "T",
        tags: [],
    },
    editTheCurrentUrl: {
        description: "edit the current url",
        key: "ge",
        tags: [],
    },
    editTheCurrentUrlAndOpenInNewTab: {
        description: "edit the current url and open in new tab",
        key: "gE",
        tags: [],
    },
    enterFindMode: { description: "enter find mode", key: "/", tags: [] },
    cycleForwardToTheNextFindMatch: {
        description: "cycle forward to the next find match",
        key: "n",
        tags: [],
    },
    cycleBackwardToThePreviousFindMatch: {
        description: "cycle backward to the previous find match",
        key: "N",
        tags: [],
    },
    goBackInHistory: { description: "go back in history", key: "H", tags: [] },
    goForwardInHistory: {
        description: "go forward in history",
        key: "L",
        tags: [],
    },
    createNewTab: { description: "create new tab", key: "t", tags: [] },
    goOneTabLeft: { description: "go one tab left", key: "J, gT", tags: [] },
    goOneTabRight: { description: "go one tab right", key: "K, gt", tags: [] },
    goToPreviouslyVisitedTab: {
        description: "go to previously visited tab",
        key: "^",
        tags: [],
    },
    goToTheFirstTab: {
        description: "go to the first tab",
        key: "g0",
        tags: [],
    },
    goToTheLastTab: { description: "go to the last tab", key: "g$", tags: [] },
    duplicateCurrentTab: {
        description: "duplicate current tab",
        key: "yt",
        tags: [],
    },
    pinOrUnpinCurrentTab: {
        description: "pin or unpin current tab",
        key: "<a-p>",
        tags: [],
    },
    muteOrUnmuteCurrentTab: {
        description: "mute or unmute current tab",
        key: "<a-m>",
        tags: [],
    },
    closeCurrentTab: { description: "close current tab", key: "x", tags: [] },
    restoreClosedTab: { description: "restore closed tab", key: "X", tags: [] },
    moveTabToNewWindow: {
        description: "move tab to new window",
        key: "W",
        tags: [],
    },
    moveTabToTheLeft: {
        description: "move tab to the left",
        key: "<<",
        tags: [],
    },
    moveTabToTheRight: {
        description: "move tab to the right",
        key: ">>",
        tags: [],
    },
    showHelp: { description: "show help", key: "?", tags: [] },
    viewPageSource: { description: "view page source", key: "gs", tags: [] },
};

/**
 * import { adapterJSON, format, source } from "./adapter.js";
 * const keymap = adapterJSON(format(source));
 * console.log(keymap);
 */

const keymapJSON = [
    { description: "scroll down", key: "c-e>", tags: [] },
    { description: "scroll up", key: "k, <c-y>", tags: [] },
    { description: "scroll to the top of the page", key: "gg", tags: [] },
    {
        description: "scroll to the bottom of the page",
        key: "G",
        tags: [],
    },
    { description: "scroll half page down", key: "d", tags: [] },
    { description: "scroll half page up", key: "u", tags: [] },
    { description: "scroll left", key: "h", tags: [] },
    { description: "scroll right", key: "l", tags: [] },
    {
        description: "scroll all the way to the left",
        key: "zH",
        tags: [],
    },
    {
        description: "scroll all the way to the right",
        key: "zL",
        tags: [],
    },
    { description: "reload the page", key: "r", tags: [] },
    {
        description: "copy the current url to the clipboard",
        key: "yy",
        tags: [],
    },
    {
        description: "open the clipboard url in the current tab",
        key: "p",
        tags: [],
    },
    {
        description: "open the clipboard url in new tab",
        key: "P",
        tags: [],
    },
    { description: "go up the url hierarchy", key: "gu", tags: [] },
    {
        description: "go to root of current url hierarchy",
        key: "gU",
        tags: [],
    },
    { description: "enter insert mode", key: "i", tags: [] },
    { description: "enter visual mode", key: "v", tags: [] },
    { description: "enter visual line mode", key: "V", tags: [] },
    {
        description: "focus the first text input on the page",
        key: "gi",
        tags: [],
    },
    { description: "open link in the current tab", key: "f", tags: [] },
    { description: "open link in new tab", key: "F", tags: [] },
    {
        description: "open multiple links in new tab",
        key: "<a-f>",
        tags: [],
    },
    {
        description: "copy link url to the clipboard",
        key: "yf",
        tags: [],
    },
    {
        description: "follow the link labeled previous or",
        key: "[[",
        tags: [],
    },
    {
        description: "follow the link labeled next or",
        key: "]]",
        tags: [],
    },
    {
        description: "select the next frame on the page",
        key: "gf",
        tags: [],
    },
    {
        description: "select the page main top frame",
        key: "gF",
        tags: [],
    },
    { description: "create new mark", key: "m", tags: [] },
    { description: "go to mark", key: "`", tags: [] },
    {
        description: "open url bookmark or history entry",
        key: "o",
        tags: [],
    },
    {
        description: "open url bookmark or history entry in new tab",
        key: "O",
        tags: [],
    },
    { description: "open bookmark", key: "b", tags: [] },
    { description: "open bookmark in new tab", key: "B", tags: [] },
    { description: "search through your open tabs", key: "T", tags: [] },
    { description: "edit the current url", key: "ge", tags: [] },
    {
        description: "edit the current url and open in new tab",
        key: "gE",
        tags: [],
    },
    { description: "enter find mode", key: "/", tags: [] },
    {
        description: "cycle forward to the next find match",
        key: "n",
        tags: [],
    },
    {
        description: "cycle backward to the previous find match",
        key: "N",
        tags: [],
    },
    { description: "go back in history", key: "H", tags: [] },
    { description: "go forward in history", key: "L", tags: [] },
    { description: "create new tab", key: "t", tags: [] },
    { description: "go one tab left", key: "J, gT", tags: [] },
    { description: "go one tab right", key: "K, gt", tags: [] },
    { description: "go to previously visited tab", key: "^", tags: [] },
    { description: "go to the first tab", key: "g0", tags: [] },
    { description: "go to the last tab", key: "g$", tags: [] },
    { description: "duplicate current tab", key: "yt", tags: [] },
    { description: "pin or unpin current tab", key: "<a-p>", tags: [] },
    { description: "mute or unmute current tab", key: "<a-m>", tags: [] },
    { description: "close current tab", key: "x", tags: [] },
    { description: "restore closed tab", key: "X", tags: [] },
    { description: "move tab to new window", key: "W", tags: [] },
    { description: "move tab to the left", key: "<<", tags: [] },
    { description: "move tab to the right", key: ">>", tags: [] },
    { description: "show help", key: "?", tags: [] },
    { description: "view page source", key: "gs", tags: [] },
];
