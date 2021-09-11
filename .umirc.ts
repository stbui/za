import { readdirSync } from 'fs';
import { join } from 'path';

function findpkgList(dir) {
    const headPkgList = [];
    const pkgList = readdirSync(join(__dirname, dir)).filter(
        pkg => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg)
    );

    const alias = pkgList.reduce((pre, pkg) => {
        pre[`@za/${pkg}`] = join(__dirname, dir, pkg, 'src');
        return {
            ...pre,
        };
    }, {});

    const tailPkgList = pkgList
        .map(path => [join(dir, path, 'src')])
        .reduce((acc, val) => acc.concat(val), []);

    // console.log(tailPkgList);
    return tailPkgList;
}

const vs = findpkgList('vscode');

console.log(vs);

export default {
    // ssr: {},
    hash: true,
    title: '聚石塔',
    mode: 'site',
    resolve: {
        includes: ['docs'],
    },
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
                    'components/za-breadcrumb',
                    'components/za-progress',
                    'components/za-pagination',
                    'components/za-toolbar',
                    'components/za-alert',
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
        ],
    },
    navs: [
        null,
        { title: 'GitHub', path: 'https://github.com/stbui/za' },
        { title: '更新日志', path: 'https://github.com/stbui/za/releases' },
        { title: '中台框架', path: 'https://github.com/stbui/prophet' },
    ],
};
