const demo = [
    {
        description: "select a char",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "left_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "line start",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "left_arrow",
                modifiers: ["left_option", "left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + h = ctrl + shift + tab (prev tab)",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "tab",
                modifiers: ["left_control", "left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + h = ctrl + left (prev desktop)",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "left_arrow",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + h = mouse left",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: -1600,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + h = mouse left fast",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: -3200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + h = mouse wheel left",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + h = mouse wheel left fast",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " h = left",
        from: {
            key_code: "h",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "left_arrow",
            },
        ],
        type: "basic",
    },
    {
        description: "command + j = shift + down",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "down_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description:
            "option + command + j = option + shift + down (select para ahead)",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "down_arrow",
                modifiers: ["left_shift"],
            },
            {
                key_code: "down_arrow",
                modifiers: ["left_shift"],
            },
            {
                key_code: "down_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + j = command + tab (next application)",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "tab",
                modifiers: ["left_command"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + j = ctrl + down (focus application)",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "down_arrow",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + j = move to the previous word end",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "left_arrow",
                modifiers: ["left_option"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + j = mouse down fast",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: 3200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + j = mouse wheel down",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + j = mouse wheel down fast",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " j = down",
        from: {
            key_code: "j",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "down_arrow",
            },
        ],
        type: "basic",
    },
    {
        description: "command + k = shift + up",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "up_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description:
            "option + command + k = option + shift + up (select line above)",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "up_arrow",
                modifiers: ["left_shift"],
            },
            {
                key_code: "up_arrow",
                modifiers: ["left_shift"],
            },
            {
                key_code: "up_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + k = command + tab (prev application)",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "tab",
                modifiers: ["left_command", "left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + k = ctrl + up (expose all)",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "up_arrow",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + k = move to the next word start",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "right_arrow",
                modifiers: ["left_option"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + k = mouse up fast",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: -3200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + k = mouse wheel up",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + k = mouse wheel up fast",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " k = up",
        from: {
            key_code: "k",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "up_arrow",
            },
        ],
        type: "basic",
    },
    {
        description: "command + l = shift + right",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "right_arrow",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description:
            "option + command + l = option + shift + right (select word after)",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "right_arrow",
                modifiers: ["left_shift", "left_option"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + l = command + tab (next tab)",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "tab",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + l = ctrl + right (next desktop)",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "right_arrow",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + l = mouse move right",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: 1600,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + l = mouse move right fast",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: 3200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + l = mouse wheel right",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + l = mouse wheel right fast",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " l = right",
        from: {
            key_code: "l",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "right_arrow",
            },
        ],
        type: "basic",
    },
    {
        description: "command + u = shift + page_up",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_up",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + command + u = shift + page_up",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_up",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + u = option + command + hyphen (zoom out)",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "hyphen",
                modifiers: ["left_command", "left_option"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + u = ctrl + command + f (fullscreen)",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "f",
                modifiers: ["left_control", "left_command"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + u = mouse left click",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button1",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + u = mouse left click",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button1",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + u = mouse wheel left (rev)",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + u = mouse wheel left (rev) fast",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " u = page_up",
        from: {
            key_code: "u",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_up",
            },
        ],
        type: "basic",
    },
    {
        description: "command + i = shift + home",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "home",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + command + i = select whole line to head",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "end",
            },
            {
                key_code: "home",
                modifiers: ["left_shift"],
            },
            {
                key_code: "home",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + i = command + shift + ` (prev window within app)",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "grave_accent_and_tilde",
                modifiers: ["left_command", "left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + i = command + h (hide current window)",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "h",
                modifiers: ["left_command"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + i = mouse right click",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button2",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + i = mouse move down fast",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button2",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + i = mouse wheel down (rev)",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + i = mouse wheel down (rev) fast",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " i = home",
        from: {
            key_code: "i",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "home",
            },
        ],
        type: "basic",
    },
    {
        description: "command + o = shift + end",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "end",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + command + o = select whole",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "home",
            },
            {
                key_code: "end",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + o = command ` (next window within app)",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "grave_accent_and_tilde",
                modifiers: ["left_command"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + o = option + command + h (expose all)",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "up_arrow",
                modifiers: ["left_control"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + o = mouse backward",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button4",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + o = mouse backward",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button4",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + o = mouse wheel up (rev)",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + o = mouse wheel up (rev) fast",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " o = end",
        from: {
            key_code: "o",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "end",
            },
        ],
        type: "basic",
    },
    {
        description: "command + p = shift + page_down",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_down",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "option + command + p = shift + page_down",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_option",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_down",
                modifiers: ["left_shift"],
            },
        ],
        type: "basic",
    },
    {
        description: "shift + p = option + command + equal_sign (zoom in)",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "equal_sign",
                modifiers: ["left_command", "left_option"],
            },
        ],
        type: "basic",
    },
    {
        description: "control + p = LaunchPad",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                shell_command: "open -a 'Launchpad'",
            },
        ],
        type: "basic",
    },
    {
        description: "option + p = mouse forward",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button5",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + p = mouse forward",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button5",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + control + p = mouse wheel right (rev)",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + p = mouse wheel right (rev) fast",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 128,
                },
            },
        ],
        type: "basic",
    },
    {
        description: " p = page_down",
        from: {
            key_code: "p",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                key_code: "page_down",
            },
        ],
        type: "basic",
    },
    {
        description: "control + shift + enter = button1 (mouse left click)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "left_control",
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button1",
            },
        ],
        type: "basic",
    },
    {
        description: "enter = button1 (mouse left click)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button1",
            },
        ],
        type: "basic",
    },
    {
        description: "command + enter = button2 (mouse right click)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button2",
            },
        ],
        type: "basic",
    },
    {
        description: "option + enter = button3 (mouse middle click)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button3",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + enter = button4 (mouse back)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button4",
            },
        ],
        type: "basic",
    },
    {
        description: "control + enter = button5 (mouse forward)",
        from: {
            key_code: "return_or_enter",
            modifiers: {
                mandatory: [
                    "left_control",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                pointing_button: "button5",
            },
        ],
        type: "basic",
    },
    {
        description: "shift + up arrow = mouse wheel up",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + down arrow = mouse wheel down",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + left arrow = mouse wheel left",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + right arrow = mouse wheel right",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -64,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + up arrow = mouse wheel up slow",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -32,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + down arrow = mouse wheel down slow",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 32,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + left arrow = mouse wheel left slow",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 32,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + option + right arrow = mouse wheel right slow",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -32,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + up arrow = mouse wheel up fast",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: 256,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + down arrow = mouse wheel down fast",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    vertical_wheel: -256,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + left arrow = mouse wheel left fast",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: 256,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "shift + command + right arrow = mouse wheel right fast",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "left_shift",
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    horizontal_wheel: -256,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "option + up arrow = mouse up slow",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: -800,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "option + down arrow = mouse down slow",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: 800,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "option + left arrow = mouse left slow",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: -800,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "option + right arrow = mouse right slow",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "left_option",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: 800,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "command + up arrow = mouse up fast",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: -4200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "command + down arrow = mouse down fast",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: 4200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "command + left arrow = mouse left fast",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: -4200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "command + right arrow = mouse right fast",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "left_command",
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: 4200,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "up arrow = mouse up",
        from: {
            key_code: "up_arrow",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: -1600,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "down arrow = mouse down",
        from: {
            key_code: "down_arrow",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    y: 1600,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "left arrow = mouse left",
        from: {
            key_code: "left_arrow",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: -1600,
                },
            },
        ],
        type: "basic",
    },
    {
        description: "right arrow = mouse right",
        from: {
            key_code: "right_arrow",
            modifiers: {
                mandatory: [
                    "right_command",
                    "right_control",
                    "right_shift",
                    "right_option",
                ],
            },
        },
        to: [
            {
                mouse_key: {
                    x: 1600,
                },
            },
        ],
        type: "basic",
    },
];
