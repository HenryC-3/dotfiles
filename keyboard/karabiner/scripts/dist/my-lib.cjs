'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var flat = require('flat');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var flat__default = /*#__PURE__*/_interopDefaultLegacy(flat);

const hyper = [
  "right_command",
  "right_control",
  "right_shift",
  "right_option"
];
const hyperExcludeShift = [
  "right_command",
  "right_control",
  "right_option"
];
const modifiers = {
  ctrl: "left_control",
  cmd: "left_command",
  opt: "left_option",
  shift: "left_shift"
};
const arrowKey = {
  left: "left_arrow",
  right: "right_arrow",
  up: "up_arrow",
  down: "down_arrow"
};
const deleteKey = {
  deleteBackward: "delete_or_backspace",
  deleteForward: "delete_forward"
};

function getCustomModifier(keycode) {
  const customModifierName = `${keycode}_modifier`;
  const rule = {
    from: {
      key_code: keycode
    },
    to: [
      {
        set_variable: {
          name: customModifierName,
          value: 1
        }
      }
    ],
    to_after_key_up: [
      {
        set_variable: {
          name: customModifierName,
          value: 0
        }
      }
    ],
    to_if_alone: [
      {
        key_code: keycode
      }
    ],
    type: "basic"
  };
  return {
    rule,
    modifierName: customModifierName
  };
}
async function getComplexRules(to, from, path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`, conditions = []) {
  const rules = [];
  Object.keys(from).forEach((key) => {
    const rule = getKarabinerRule(
      key.split(".").join("-"),
      from[key],
      to[key],
      conditions
    );
    rules.push(rule);
  });
  try {
    await getJSONFIle(rules, path);
  } catch (error) {
    console.log(error);
  }
  return rules;
}
function getKarabinerRule(desc, fromKey, toKey, conditions = []) {
  return {
    description: desc,
    from: fromKey,
    to: toKey,
    type: "basic",
    conditions
  };
}
async function getJSONFIle(data, path) {
  await fs__default["default"].writeFile(
    path,
    JSON.stringify(data),
    { flag: "wx" },
    function(err) {
      if (err)
        throw err;
      console.log(`File saved in ${path}`);
    }
  );
}
function getToKey(keycode, modifiers = []) {
  if (modifiers.length === 0) {
    return {
      key_code: keycode
    };
  }
  return {
    key_code: keycode,
    modifiers
  };
}
function getFromKey(keycode, modifiers) {
  return {
    key_code: keycode,
    modifiers: {
      mandatory: modifiers
    }
  };
}
function getFromKeyWithHyper$1(keycode, modifier = "") {
  if (modifier) {
    return getFromKey(keycode, [...hyper, modifier]);
  }
  return getFromKey(keycode, [...hyper]);
}

const rightHand = {
  mode: {
    cursorMove: modifiers.opt,
    select: modifiers.cmd
  },
  char: {
    cursorMove: {
      left: "h",
      right: "l"
    },
    select: {
      left: "h",
      right: "l"
    }
  },
  word: {
    cursorMove: {
      left: "j",
      right: "k"
    },
    select: {
      left: "j",
      right: "k"
    }
  },
  lineX: {
    cursorMove: {
      start: "h",
      end: "l"
    },
    select: {
      start: "i",
      end: "o"
    }
  },
  lineY: {
    cursorMove: {
      up: "k",
      down: "j"
    },
    select: {
      prev: "i",
      next: "o"
    }
  },
  page: {
    cursorMove: {
      start: "u",
      end: "p"
    },
    select: {
      above: "u",
      below: "p"
    }
  }
};

const originNavigationRules = {
  char: {
    cursorMove: {
      left: getToKey(arrowKey.left),
      right: getToKey(arrowKey.right)
    },
    select: {
      left: getToKey(arrowKey.left, [modifiers.shift]),
      right: getToKey(arrowKey.right, [modifiers.shift])
    }
  },
  word: {
    cursorMove: {
      left: getToKey(arrowKey.left, [modifiers.opt]),
      right: getToKey(arrowKey.right, [modifiers.opt])
    },
    select: {
      left: getToKey(arrowKey.left, [modifiers.shift, modifiers.opt]),
      right: getToKey(arrowKey.right, [modifiers.shift, modifiers.opt])
    }
  },
  lineX: {
    cursorMove: {
      start: getToKey(arrowKey.left, [modifiers.cmd]),
      end: getToKey(arrowKey.right, [modifiers.cmd])
    },
    select: {
      start: getToKey(arrowKey.left, [modifiers.cmd, modifiers.shift]),
      end: getToKey(arrowKey.right, [modifiers.cmd, modifiers.shift])
    }
  },
  lineY: {
    cursorMove: {
      up: getToKey(arrowKey.up),
      down: getToKey(arrowKey.down)
    },
    select: {
      prev: getToKey(arrowKey.up, [modifiers.shift]),
      next: getToKey(arrowKey.down, [modifiers.shift])
    }
  },
  page: {
    cursorMove: {
      start: getToKey(arrowKey.up, [modifiers.cmd]),
      end: getToKey(arrowKey.down, [modifiers.cmd])
    },
    select: {
      above: getToKey(arrowKey.up, [modifiers.cmd, modifiers.shift]),
      below: getToKey(arrowKey.down, [modifiers.cmd, modifiers.shift])
    }
  }
};
const hyperNavigationRules = {
  char: {
    cursorMove: {
      left: getFromKeyWithHyper$1(rightHand.char.cursorMove.left),
      right: getFromKeyWithHyper$1(rightHand.char.cursorMove.right)
    },
    select: {
      left: getFromKeyWithHyper$1(
        rightHand.char.select.left,
        rightHand.mode.select
      ),
      right: getFromKeyWithHyper$1(
        rightHand.char.select.right,
        rightHand.mode.select
      )
    }
  },
  word: {
    cursorMove: {
      left: getFromKeyWithHyper$1(
        rightHand.word.cursorMove.left,
        rightHand.mode.cursorMove
      ),
      right: getFromKeyWithHyper$1(
        rightHand.word.cursorMove.right,
        rightHand.mode.cursorMove
      )
    },
    select: {
      left: getFromKeyWithHyper$1(
        rightHand.word.cursorMove.left,
        rightHand.mode.select
      ),
      right: getFromKeyWithHyper$1(
        rightHand.word.cursorMove.right,
        rightHand.mode.select
      )
    }
  },
  lineX: {
    cursorMove: {
      start: getFromKeyWithHyper$1(
        rightHand.lineX.cursorMove.start,
        rightHand.mode.cursorMove
      ),
      end: getFromKeyWithHyper$1(
        rightHand.lineX.cursorMove.end,
        rightHand.mode.cursorMove
      )
    },
    select: {
      start: getFromKeyWithHyper$1(
        rightHand.lineX.select.start,
        modifiers.opt
      ),
      end: getFromKeyWithHyper$1(rightHand.lineX.select.end, modifiers.opt)
    }
  },
  lineY: {
    select: {
      prev: getFromKeyWithHyper$1(
        rightHand.lineY.select.prev,
        rightHand.mode.select
      ),
      next: getFromKeyWithHyper$1(
        rightHand.lineY.select.next,
        rightHand.mode.select
      )
    },
    cursorMove: {
      up: getFromKeyWithHyper$1(rightHand.lineY.cursorMove.up),
      down: getFromKeyWithHyper$1(rightHand.lineY.cursorMove.down)
    }
  },
  page: {
    cursorMove: {
      start: getFromKeyWithHyper$1(
        rightHand.page.cursorMove.start,
        rightHand.mode.cursorMove
      ),
      end: getFromKeyWithHyper$1(
        rightHand.page.cursorMove.end,
        rightHand.mode.cursorMove
      )
    },
    select: {
      above: getFromKeyWithHyper$1(
        rightHand.page.select.above,
        rightHand.mode.select
      ),
      below: getFromKeyWithHyper$1(
        rightHand.page.select.below,
        rightHand.mode.select
      )
    }
  }
};

const from$3 = flat__default["default"](hyperNavigationRules, { maxDepth: 3 });
const to$3 = flat__default["default"](originNavigationRules, { maxDepth: 3 });
const hyperNavigation = (path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) => {
  getComplexRules(to$3, from$3, path);
};

const { rule: spaceModifierRule, modifierName } = getCustomModifier("spacebar");
const conditions = [
  {
    name: modifierName,
    type: "variable_if",
    value: 1
  }
];
const from$2 = {
  left: getFromKey("h", [modifiers.shift]),
  down: getFromKey("j", [modifiers.shift]),
  up: getFromKey("k", [modifiers.shift]),
  right: getFromKey("l", [modifiers.shift])
};
const to$2 = {
  left: getToKey("left_arrow"),
  down: getToKey("down_arrow"),
  up: getToKey("up_arrow"),
  right: getToKey("right_arrow")
};
const getSpaceModifier = (path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) => {
  getJSONFIle(spaceModifierRule, path);
};
const getArrow = () => {
  getComplexRules(
    to$2,
    from$2,
    `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`,
    conditions
  );
};

const to$1 = {
  deleteCharForward: getToKey("delete_or_backspace"),
  deleteWordForward: getToKey("delete_or_backspace", [modifiers.opt]),
  deleteWordBackward: getToKey("delete_forward", [modifiers.opt]),
  deleteCharBackward: getToKey("delete_forward")
};
const from$1 = {
  deleteCharForward: getFromKeyWithHyper("n"),
  deleteWordForward: getFromKeyWithHyper("m"),
  deleteWordBackward: getFromKeyWithHyper("comma"),
  deleteCharBackward: getFromKeyWithHyper("period")
};
async function mapDeleteBackspace(path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) {
  getComplexRules(to$1, from$1, path);
}
function getFromKeyWithHyper(keycode, modifier = "") {
  if (modifier) {
    return getFromKey(keycode, [...hyperExcludeShift, modifier]);
  }
  return getFromKey(keycode, [...hyperExcludeShift]);
}

const to = {
  undo: getToKey("z", [modifiers.cmd]),
  redo: getToKey("z", [modifiers.cmd, modifiers.shift]),
  copy: getToKey("c", [modifiers.cmd]),
  paste: getToKey("v", [modifiers.cmd])
};
const from = {
  undo: getFromKeyWithHyper$1("i"),
  redo: getFromKeyWithHyper$1("u"),
  copy: getFromKeyWithHyper$1("o"),
  paste: getFromKeyWithHyper$1("p")
};
async function mapRedoUndoCopyPaste(path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) {
  getComplexRules(to, from, path);
}

const leftHandAnchor = {
  wordStart: "s",
  wordEnd: "d",
  lineStart: "a",
  lineEnd: "f",
  charStart: "q",
  charEnd: "r",
  lineUp: "e",
  lineDown: "w",
  pageUp: "t",
  pageDown: "g"
};
const leftHandAnchorDelete = {
  wordStart: "s",
  wordEnd: "d",
  lineStart: "a",
  lineEnd: "f",
  charStart: "q",
  charEnd: "r"
};
const toNavigation = {
  wordStart: getToKey(arrowKey.left, [modifiers.opt]),
  wordEnd: getToKey(arrowKey.right, [modifiers.opt]),
  lineStart: getToKey(arrowKey.left, [modifiers.cmd]),
  lineEnd: getToKey(arrowKey.right, [modifiers.cmd]),
  charStart: getToKey(arrowKey.left),
  charEnd: getToKey(arrowKey.right),
  lineUp: getToKey(arrowKey.up),
  lineDown: getToKey(arrowKey.down),
  pageUp: getToKey(arrowKey.up, [modifiers.cmd]),
  pageDown: getToKey(arrowKey.down, [modifiers.cmd])
};
const toDelete = {
  wordStart: getToKey(deleteKey.deleteBackward, [modifiers.opt]),
  wordEnd: getToKey(deleteKey.deleteForward, [modifiers.opt]),
  lineStart: getToKey(deleteKey.deleteBackward, [modifiers.cmd]),
  lineEnd: getToKey(deleteKey.deleteForward, [modifiers.cmd]),
  charStart: getToKey(deleteKey.deleteBackward),
  charEnd: getToKey(deleteKey.deleteForward)
};
const toSelect = {
  wordStart: getToKey(arrowKey.left, [modifiers.shift, modifiers.opt]),
  wordEnd: getToKey(arrowKey.right, [modifiers.shift, modifiers.opt]),
  lineStart: getToKey(arrowKey.left, [modifiers.cmd, modifiers.shift]),
  lineEnd: getToKey(arrowKey.right, [modifiers.cmd, modifiers.shift]),
  charStart: getToKey(arrowKey.left, [modifiers.shift]),
  charEnd: getToKey(arrowKey.right, [modifiers.shift]),
  lineUp: getToKey(arrowKey.up, [modifiers.shift]),
  lineDown: getToKey(arrowKey.down, [modifiers.shift]),
  pageUp: getToKey(arrowKey.up, [modifiers.cmd, modifiers.shift]),
  pageDown: getToKey(arrowKey.down, [modifiers.cmd, modifiers.shift])
};
const fromNavigation = getFromObj(leftHandAnchor);
const fromSelect = getFromObj(leftHandAnchor, modifiers.cmd);
const fromDelete = getFromObj(leftHandAnchorDelete, modifiers.opt);
const getRuleNavigation = () => {
  return getComplexRules(toNavigation, fromNavigation);
};
const getRuleSelect = () => {
  return getComplexRules(toSelect, fromSelect);
};
const getRuleDelete = () => {
  return getComplexRules(toDelete, fromDelete);
};
function getFromObj(anchor, modifier = "") {
  const from = {};
  Object.keys(anchor).map((key) => {
    const theKey = key;
    if (modifier) {
      from[theKey] = getFromKeyWithHyper$1(anchor[key], modifier);
    } else {
      from[theKey] = getFromKeyWithHyper$1(anchor[key]);
    }
  });
  return from;
}

const mapHyperNavigation = hyperNavigation;
const mapUndoRedoCopyPaste = mapRedoUndoCopyPaste;
const mapBackSpaceDelete = mapDeleteBackspace;
const mapArrow = {
  getSpaceModifier,
  getArrow
};
const thumbs = {
  getRuleNavigation,
  getRuleSelect,
  getRuleDelete
};

exports.mapArrow = mapArrow;
exports.mapBackSpaceDelete = mapBackSpaceDelete;
exports.mapHyperNavigation = mapHyperNavigation;
exports.mapUndoRedoCopyPaste = mapUndoRedoCopyPaste;
exports.thumbs = thumbs;
//# sourceMappingURL=my-lib.cjs.map
