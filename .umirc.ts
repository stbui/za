export default {
    // ssr: {},
    hash: true,
    title: '聚石塔',
    mode: 'site',
    menus: {
        '/guide': [
            {
                title: '介绍',
                children: ['guide/index', 'guide/getting-started'],
            },
        ],
        '/components': [
            {
                title: '布局',
                children: [
                    'components/za-affix',
                    'components/za-anchor',
                    'components/za-audio-player',
                    'components/za-button',
                    'components/za-elevation',
                ],
            },
            {
                title: '导航',
                children: ['components/za-appbar'],
            },
            {
                title: '数据录入',
                children: [
                    'components/za-input',
                    'components/za-checkbox',
                    'components/za-radio',
                    'components/za-switch',
                ],
            },
            {
                title: '数据展示',
                children: ['components/za-avatar', 'components/za-menu'],
            },
            {
                title: '反馈',
                children: ['components/za-alert'],
            },
            // {
            //     title: '其他',
            //     children: [
            //         'components/za-affix',
            //         'components/za-alert',
            //         'components/za-anchor',
            //         'components/za-appbar',
            //         'components/za-avatar',
            //         'components/za-button',
            //     ],
            // },
        ],
    },
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/stbui/za' },
        { title: '更新日志', path: 'https://github.com/stbui/za/releases' },
        { title: '中台框架', path: 'https://github.com/stbui/prophet' },
    ],
};
