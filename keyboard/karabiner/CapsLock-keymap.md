> This is a modified version of [Vonng/Capslock](https://github.com/Vonng/Capslock#shifter)

### Basic

|           Key            |          MapsTo          | Comment                                     |
| :----------------------: | :----------------------: | ------------------------------------------- |
|    <kbd>⇪</kbd> Press    |   <kbd>⎋</kbd> Escape    | Click Capslock to emit Escape               |
|    <kbd>⇪</kbd> Hold     |    <kbd>✱</kbd> Hyper    | Hold Capslock to enable **Hyper** modifier. |
| <kbd>✱</kbd><kbd>⎋</kbd> |  <kbd>⇪</kbd> Capslock   | Press to switch Capslock status             |
| <kbd>✱</kbd><kbd>␣</kbd> | <kbd>⌃</kbd><kbd>␣</kbd> | Switch input source, +<kbd>⌘</kbd> to emoji |

> Note that <kbd>✱</kbd> is implemented as combination of **ALL RIGHT MODIFIERS**: <kbd>⌘</kbd><kbd>⌥</kbd><kbd>⌃</kbd><kbd>⇧</kbd>.
>
> Hold **<kbd>✱</kbd> Hyper** to enable hyper functionalities. We will assume and omit that in subsequent document.

### Navigation

-   vim arrow(basic move) opt(advance move) cmd(select)
-   H(line start) J(word start) K(word end) L(line end)
-   U(page start) I(select prev line) O(select prev line) P(page end)

| unit/action | move                         | select                       | note                                        |
| ----------- | ---------------------------- | ---------------------------- | ------------------------------------------- |
| char(x)     | <kbd>h/l</kbd>               | <kbd>cmd</kbd><kbd>h/l</kbd> | next/prev char                              |
| word(x)     | <kbd>opt</kbd><kbd>j/k</kbd> | <kbd>cmd</kbd><kbd>j/k</kbd> | word start/end                              |
| line(x)     | <kbd>opt</kbd><kbd>h/l</kbd> | <kbd>opt</kbd><kbd>i/o</kbd> | line start/end                              |
| line(y)     | <kbd>j/k</kbd>               | <kbd>cmd</kbd><kbd>i/o</kbd> | next/prev line                              |
| page(x)     | <kbd>opt</kbd><kbd>u/p</kbd> | <kbd>cmd</kbd><kbd>u/p</kbd> | move to page start/end, select before/after |

**Arrow Navigation**

-   Arrows <kbd>←</kbd>↓<kbd>↑</kbd>→ to 🖱️ **mouse** actions too. Hold <kbd>⌥</kbd> Option to ⏬ **slow down**, hold <kbd>⌘</kbd> Command to ⏫ **speed up**.
-   Hold <kbd>⇧</kbd> Shift turns to 🖲️ **wheel move**. Extra <kbd>⌥</kbd> Option to ⏬ **slow down**, extra <kbd>⌘</kbd> Command to ⏫ **speed up**.
-   <kbd>↩</kbd> Return maps to left **click**. And additional <kbd>⌘</kbd><kbd>⌥</kbd><kbd>⌃</kbd><kbd>⇧</kbd> turns into right click, middle click, backward, forward.

|                     Feature                      |      🖱️      |     🖱️⏬     |     🖱️⏫     |      🖲️      |           🖲️⏬           |           🖲️⏫           |
| :----------------------------------------------: | :----------: | :----------: | :----------: | :----------: | :----------------------: | :----------------------: |
|                   **Key\Mod**                    | <kbd>✱</kbd> | <kbd>⌥</kbd> | <kbd>⌘</kbd> | <kbd>⇧</kbd> | <kbd>⇧</kbd><kbd>⌥</kbd> | <kbd>⇧</kbd><kbd>⌘</kbd> |
| <kbd>←</kbd><kbd>↓</kbd><kbd>↑</kbd><kbd>→</kbd> | speed = 1600 |  speed ÷ 2   |  speed × 2   |  speed = 32  |        speed ÷ 2         |        speed × 2         |
|                   <kbd>↩</kbd>                   |     🖱️L      |     🖱️M      |     🖱️R      |     🖱️L      |           🖱️B            |           🖱️F            |

### Deletion

<!--NOTE vscode 中单次点击 caps-lock 可以取消选中，但是 typora 中不行-->

<kbd>N</kbd> <kbd>M</kbd> <kbd>,</kbd> <kbd>.</kbd> are used as **Deletor keys**. Right below the navigators for fast access (brown area).

|   Key\Mod    |   <kbd>✱</kbd>   |    <kbd>⌘</kbd>    |    <kbd>⌥</kbd>    |
| :----------: | :--------------: | :----------------: | :----------------: |
| <kbd>N</kbd> | del a word ahead | del till line head | del the whole line |
| <kbd>M</kbd> | del a char ahead |  del a word ahead  |  move line below   |
| <kbd>,</kbd> | del a char after |  del a word after  |  move line above   |
| <kbd>.</kbd> | del a word after | del till line end  | del the whole line |
| <kbd>⌫</kbd> |     del file     |     purge file     |                    |

### Shifter

<!--NOTE 利用右侧符号键，通过 1. hyper 2. hyper + cmd 3. hyper + opt 快速切换三套符号，避免从右侧移动到顶端-->

<!--NOTE ,. 是 deletion 的保留键 -->

|           Key\Mod           | <kbd>✱</kbd>  | <kbd>⌘</kbd>  | <kbd>⌥</kbd>  |
| :-------------------------: | :-----------: | :-----------: | :-----------: |
|        <kbd>-</kbd>         | <kbd>\_</kbd> |   Zoom Out    |               |
|        <kbd>=</kbd>         | <kbd>+</kbd>  |    Zoom In    |               |
|        <kbd>[</kbd>         | <kbd>{</kbd>  | <kbd>(</kbd>  | <kbd><</kbd>  |
|        <kbd>]</kbd>         | <kbd>{</kbd>  | <kbd>)</kbd>  | <kbd>></kbd>  |
|   <kbd>;</kbd><!--DONE-->   | <kbd>:</kbd>  | <kbd>!</kbd>  | <kbd>@</kbd>  |
|   <kbd>'</kbd><!--DONE-->   | <kbd>#</kbd>  | <kbd>$</kbd>  | <kbd>%</kbd>  |
|   <kbd>/</kbd><!--DONE-->   | <kbd>?</kbd>  | <kbd>\\</kbd> | <kbd>\|</kbd> |
| <kbd>\\</kbd><!--PENDING--> | <kbd>/</kbd>  |               |               |

---

## References

### Symbols

|                      Glyph                       |             Name             |          Glyph           |           Name           |
| :----------------------------------------------: | :--------------------------: | :----------------------: | :----------------------: |
|                   <kbd>⇪</kbd>                   |           Capslock           |       <kbd>✱</kbd>       |          Hyper           |
|                   <kbd>⎋</kbd>                   |            Escape            |       <kbd>␣</kbd>       |          Space           |
|                   <kbd>⌘</kbd>                   |        Command (Mac)         |       <kbd>⎇</kbd>       |       Alter (Win)        |
|                   <kbd>⌥</kbd>                   |         Option (Mac)         |       <kbd>⊞</kbd>       |        Win (Win)         |
|                   <kbd>⌃</kbd>                   |           Control            |       <kbd>⇧</kbd>       |          Shift           |
|                   <kbd>↩</kbd>                   |            Return            |       <kbd>⌤</kbd>       |          Enter           |
| <kbd>←</kbd><kbd>↓</kbd><kbd>↑</kbd><kbd>→</kbd> |         Arrow Cursor         | <kbd>↖</kbd><kbd>↘</kbd> |         Home/End         |
|             <kbd>⇥</kbd><kbd>⇤</kbd>             |             Tab              | <kbd>⌫</kbd><kbd>⌦</kbd> |  Delete / ForwardDelete  |
|                   <kbd>⇭</kbd>                   |           Numlock            |           ⏫⏬           |       Fast / Slow        |
|                       🖱️L                        |  Mouse Left Click (Button1)  |           🖱️B            | Mouse Backward (Button4) |
|                       🖱️R                        | Mouse Right Click (Button2)  |           🖱️F            | Mouse Forward (Button5)  |
|                       🖱️M                        | Mouse Middle Click (Button3) |            🖲️            |       Mouse Wheel        |

### Control Planes

<details>
<summary>control planes</summary>

| Plane |        Modifiers         | Plane |              Modifiers               | Plane |                          Modifiers                           |
| :---: | :----------------------: | :---: | :----------------------------------: | :---: | :----------------------------------------------------------: |
| **0** |       <kbd>✱</kbd>       |   3   | <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌥</kbd> |   7   |       <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌥</kbd><kbd>⌃</kbd>       |
|   1   | <kbd>✱</kbd><kbd>⌘</kbd> |   5   | <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌃</kbd> |  11   |       <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌥</kbd><kbd>⇧</kbd>       |
|   2   | <kbd>✱</kbd><kbd>⌥</kbd> |   6   | <kbd>✱</kbd><kbd>⌥</kbd><kbd>⌃</kbd> |  13   |       <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌃</kbd><kbd>⇧</kbd>       |
|   4   | <kbd>✱</kbd><kbd>⌃</kbd> |   9   | <kbd>✱</kbd><kbd>⌘</kbd><kbd>⇧</kbd> |  14   |       <kbd>✱</kbd><kbd>⌥</kbd><kbd>⌃</kbd><kbd>⇧</kbd>       |
|   8   | <kbd>✱</kbd><kbd>⇧</kbd> |  10   | <kbd>✱</kbd><kbd>⌥</kbd><kbd>⇧</kbd> |  15   | <kbd>✱</kbd><kbd>⌘</kbd><kbd>⌥</kbd><kbd>⌃</kbd><kbd>⇧</kbd> |
|       |                          |  12   | <kbd>✱</kbd><kbd>⌃</kbd><kbd>⇧</kbd> |       |                                                              |

</details>
