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

-   <kbd>H</kbd>, <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd>, <kbd>U</kbd>, <kbd>I</kbd>, <kbd>O</kbd>, <kbd>P</kbd> are used as **Navigators**. Maps to <kbd>←</kbd><kbd>↓</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>⇞</kbd><kbd>↖</kbd><kbd>↘</kbd><kbd>⇟</kbd> by default. (pink area).
-   9 control planes has already been allocated for navigators.
-   Hold additional <kbd>⌘</kbd> Command for **selection**. (like holding <kbd>⇧</kbd>shift in normal), additional <kbd>⌥</kbd> Option for **word/para selection**. <!--NOTE 以词为单位选择内容时，手指会变成孔雀状，有点不适应，相较于之间大幅减少了手腕位移-->
-   Hold additional <kbd>⇧</kbd> Shift for **app/win/tab switching**. Hold additional <kbd>⌃</kbd> Control for **desktop management** .
-   <!--DONE 移除 mouse move 将该行为替换为 word left/right-->Hold additional <kbd>⌥</kbd> Option for 🖱️ **mouse move**.  Add <kbd>⇧</kbd>shift to **⏫ accelerate**.  (<kbd>U</kbd>, <kbd>I</kbd>, <kbd>O</kbd>, <kbd>P</kbd> maps to mouse buttons) .
-   <kbd>⇧</kbd><kbd>⌥</kbd> turns navigator to **🖲️ mouse wheel**, and <kbd>⇧</kbd><kbd>⌘</kbd> is the ⏫ **accelerated** version . `HJKL` for wheel, wihle `UIOP` for reversed wheel move.

| Feature      |   **Move**   |     WordMove      |  **Select**  | **WordSel**              |
| ------------ | :----------: | :---------------: | :----------: | ------------------------ |
| Key\Mod      | <kbd>✱</kbd> |   <kbd>⌥</kbd>    | <kbd>⌘</kbd> | <kbd>⌘</kbd><kbd>⌥</kbd> |
| <kbd>H</kbd> |     Left     |                   |  word left   | word left                |
| <kbd>J</kbd> |     Down     | previous word end |  line down   | 3 line down              |
| <kbd>K</kbd> |      Up      |  next word start  |   line up    | 3 line up                |
| <kbd>L</kbd> |    Right     |                   |  word right  | word right               |
| <kbd>U</kbd> |     PgUp     |                   |  prev page   | prev page                |
| <kbd>I</kbd> |     Home     |                   |  line head   | end2head                 |
| <kbd>O</kbd> |     End      |                   |   line end   | head2end                 |
| <kbd>P</kbd> |     PgDn     |                   |  next page   | next page                |

<!--NOTE 在 vscode 里，hyper+I/O 可以实现 move line head/end，但在 typora 中却是页首/尾-->

<!--DONE 移除上表中，window 和 desktop 列的快捷键，使用 yabai 控制 window 以及 desktop space-->

<!--PENDING 考虑移除有关鼠标及滚轮的相关快捷键-->

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
