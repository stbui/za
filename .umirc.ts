export default {
    // ssr: {},
    hash: true,
    title: 'za',
    mode: 'site',
    menus: {
        '/guide': [
            {
                title: '介绍',
                children: ['guide/index', 'guide/getting-started'],
            },
        ],
    },
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/stbui/za' },
        { title: '更新日志', path: 'https://github.com/stbui/za/releases' },
    ],
    resolve: {
        includes: ['./docs', './packages'],
    },
};
