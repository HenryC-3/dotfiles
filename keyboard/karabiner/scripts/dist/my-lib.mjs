import fs from 'fs';
import flat from 'flat';

const hyper = [
  "right_command",
  "right_control",
  "right_shift",
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
function getFromKeyWithHyper(keycode, modifier = "") {
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
      left: getFromKeyWithHyper(preferKeys.char.cursorMove.left),
      right: getFromKeyWithHyper(preferKeys.char.cursorMove.right)
    },
    select: {
      left: getFromKeyWithHyper(
        preferKeys.char.select.left,
        preferKeys.mode.select
      ),
      right: getFromKeyWithHyper(
        preferKeys.char.select.right,
        preferKeys.mode.select
      )
    }
  },
  word: {
    cursorMove: {
      left: getFromKeyWithHyper(
        preferKeys.word.cursorMove.left,
        preferKeys.mode.cursorMove
      ),
      right: getFromKeyWithHyper(
        preferKeys.word.cursorMove.right,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      left: getFromKeyWithHyper(
        preferKeys.word.cursorMove.left,
        preferKeys.mode.select
      ),
      right: getFromKeyWithHyper(
        preferKeys.word.cursorMove.right,
        preferKeys.mode.select
      )
    }
  },
  lineX: {
    cursorMove: {
      start: getFromKeyWithHyper(
        preferKeys.lineX.cursorMove.start,
        preferKeys.mode.cursorMove
      ),
      end: getFromKeyWithHyper(
        preferKeys.lineX.cursorMove.end,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      start: getFromKeyWithHyper(
        preferKeys.lineX.select.start,
        modifiers.opt
      ),
      end: getFromKeyWithHyper(
        preferKeys.lineX.select.end,
        modifiers.opt
      )
    }
  },
  lineY: {
    select: {
      prev: getFromKeyWithHyper(
        preferKeys.lineY.select.prev,
        preferKeys.mode.select
      ),
      next: getFromKeyWithHyper(
        preferKeys.lineY.select.next,
        preferKeys.mode.select
      )
    },
    cursorMove: {
      up: getFromKeyWithHyper(preferKeys.lineY.cursorMove.up),
      down: getFromKeyWithHyper(preferKeys.lineY.cursorMove.down)
    }
  },
  page: {
    cursorMove: {
      start: getFromKeyWithHyper(
        preferKeys.page.cursorMove.start,
        preferKeys.mode.cursorMove
      ),
      end: getFromKeyWithHyper(
        preferKeys.page.cursorMove.end,
        preferKeys.mode.cursorMove
      )
    },
    select: {
      above: getFromKeyWithHyper(
        preferKeys.page.select.above,
        preferKeys.mode.select
      ),
      below: getFromKeyWithHyper(
        preferKeys.page.select.below,
        preferKeys.mode.select
      )
    }
  }
};

const to = {
  undo: getToKey("z", [modifiers.cmd]),
  redo: getToKey("z", [modifiers.cmd, modifiers.shift]),
  copy: getToKey("c", [modifiers.cmd]),
  paste: getToKey("v", [modifiers.cmd])
};
const from = {
  undo: getFromKeyWithHyper("i"),
  redo: getFromKeyWithHyper("u"),
  copy: getFromKeyWithHyper("o"),
  paste: getFromKeyWithHyper("p")
};
async function zZcvTuiop(path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) {
  const rules = [];
  Object.keys(from).forEach((key) => {
    const theKey = key;
    const rule = getKarabinerRule(
      key.split(".").join("-"),
      from[theKey],
      to[theKey]
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

const hyperNav = flat(hyperNavigationRules, { maxDepth: 3 });
const originNav = flat(originNavigationRules, { maxDepth: 3 });
async function getComplexRules(path = `/Users/henry/HH-workspace/dotfile/keyboard/karabiner/scripts/workbench/karabiner-rules/${Date.now()}.json`) {
  const rules = [];
  Object.keys(hyperNav).forEach((key) => {
    const rule = getKarabinerRule(
      key.split(".").join("-"),
      hyperNav[key],
      originNav[key]
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
const mapUndoRedoCopyPaste = zZcvTuiop;

export { getComplexRules, mapUndoRedoCopyPaste };
//# sourceMappingURL=my-lib.mjs.map
