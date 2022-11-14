#!/usr/bin/env zx

/**
 * 该脚本将更新频率较为频繁，且内容相对简单的配置文件，备份到 icloud
 * 搭配 cron 实现定时备份，详见 ./README.md
 */

const icloudPath = $.env.ICLOUD_HOME;

const scripts = {
    raycast: {
        cmd: `cp`,
        args: [
            `${os.homedir()}/Library/Preferences/com.raycast.macos.plist`,
            `${icloudPath}/Raycast/com.raycast.macos.plist`,
        ],
    },
};

for (let key in scripts) {
    await $`${scripts[key].cmd} ${scripts[key].args}`;
}

const msg = `backed up ${Object.keys(scripts).join(",")} to icloud`;

$`terminal-notifier -message ${msg} --title 'Backup to iCloud'`;
