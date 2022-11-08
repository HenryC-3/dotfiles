import fs from 'fs';
import flat from 'flat';

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

async function getComplexRules(to, from, path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) {
  const rules = [];
  Object.keys(from).forEach((key) => {
    const rule = getKarabinerRule(
      key.split(".").join("-"),
      from[key],
      to[key]
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
function getKarabinerRule(desc, fromKey, toKey) {
  return {
    description: desc,
    from: fromKey,
    to: toKey,
    type: "basic"
  };
}
async function getJSONFIle(data, path) {
  await fs.writeFile(
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

const preferKeys = {
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
      left: getFromKeyWithHyper$1(preferKeys.char.cursorMove.left),
      right: getFromKeyWithHyper$1(preferKeys.char.cursorMove.right)
    },
    select: {
      left: getFromKeyWithHyper$1(
        preferKeys.char.select.left,
        preferKeys.mode.select
      ),
      right: getFromKeyWithHyper$1(
        preferKeys.char.select.right,
        preferKeys.mode.select
      )
    }
  },
  word: {
    cursorMove: {
      left: getFromKeyWithHyper$1(
        preferKeys.word.cursorMove.left,
        preferKeys.mode.cursorMove
      ),
      right: getFromKeyWithHyper$1(
        preferKeys.word.cursorMove.right,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      left: getFromKeyWithHyper$1(
        preferKeys.word.cursorMove.left,
        preferKeys.mode.select
      ),
      right: getFromKeyWithHyper$1(
        preferKeys.word.cursorMove.right,
        preferKeys.mode.select
      )
    }
  },
  lineX: {
    cursorMove: {
      start: getFromKeyWithHyper$1(
        preferKeys.lineX.cursorMove.start,
        preferKeys.mode.cursorMove
      ),
      end: getFromKeyWithHyper$1(
        preferKeys.lineX.cursorMove.end,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      start: getFromKeyWithHyper$1(
        preferKeys.lineX.select.start,
        modifiers.opt
      ),
      end: getFromKeyWithHyper$1(
        preferKeys.lineX.select.end,
        modifiers.opt
      )
    }
  },
  lineY: {
    select: {
      prev: getFromKeyWithHyper$1(
        preferKeys.lineY.select.prev,
        preferKeys.mode.select
      ),
      next: getFromKeyWithHyper$1(
        preferKeys.lineY.select.next,
        preferKeys.mode.select
      )
    },
    cursorMove: {
      up: getFromKeyWithHyper$1(preferKeys.lineY.cursorMove.up),
      down: getFromKeyWithHyper$1(preferKeys.lineY.cursorMove.down)
    }
  },
  page: {
    cursorMove: {
      start: getFromKeyWithHyper$1(
        preferKeys.page.cursorMove.start,
        preferKeys.mode.cursorMove
      ),
      end: getFromKeyWithHyper$1(
        preferKeys.page.cursorMove.end,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      above: getFromKeyWithHyper$1(
        preferKeys.page.select.above,
        preferKeys.mode.select
      ),
      below: getFromKeyWithHyper$1(
        preferKeys.page.select.below,
        preferKeys.mode.select
      )
    }
  }
};

const from$2 = flat(hyperNavigationRules, { maxDepth: 3 });
const to$2 = flat(originNavigationRules, { maxDepth: 3 });
const hyperNavigation = (path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) => {
  getComplexRules(to$2, from$2, path);
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

const mapHyperNavigation = hyperNavigation;
const mapUndoRedoCopyPaste = mapRedoUndoCopyPaste;
const mapBackSpaceDelete = mapDeleteBackspace;

export { mapBackSpaceDelete, mapHyperNavigation, mapUndoRedoCopyPaste };
//# sourceMappingURL=my-lib.mjs.map
