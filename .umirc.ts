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
                children: [
                    'guide/index',
                    'guide/getting-started',
                    'guide/Contributing',
                    'guide/customTheme',
                ],
            },
        ],

        '/components': [
            {
                title: '基础',
                children: [
                    'components/za-button',
                    'components/za-divider',
                    'components/za-picture-preview',
                    'components/za-image-loader',
                    'components/za-color-picker',
                    'components/za-audio-player',
                    'components/za-video-viewer',
                    'components/za-rich-editor',
                    'components/za-guide',
                ],
            },
            {
                title: '布局',
                children: [
                    'components/za-grid',
                    'components/za-layout',
                    'components/za-elevation',
                    'components/za-toolbar',
                    'components/za-overlay',
                ],
            },
            {
                title: '导航',
                children: [
                    'components/za-affix',
                    'components/za-menu',
                    'components/za-dropdown',
                    'components/za-breadcrumb',
                    // 'components/za-tabs',
                    'components/za-steps',
                    'components/za-anchor',
                    'components/za-backtop',
                    'components/za-pagination',
                    'components/za-appbar',
                ],
            },
            {
                title: '数据录入',
                children: [
                    'components/za-autocomplete',
                    'components/za-cascader',
                    'components/za-checkbox',
                    'components/za-date-picker',
                    'components/za-form',
                    'components/za-input',
                    'components/za-radio',
                    'components/za-select',
                    'components/za-switch',
                    'components/za-slider',
                    'components/za-time-picker',
                    'components/za-transfer',
                    'components/za-tree-select',
                    'components/za-upload',
                    'components/za-footer-toolbar',
                ],
            },
            {
                title: '数据展示',
                children: [
                    'components/za-avatar',
                    'components/za-badge',
                    'components/za-carousel',
                    'components/za-collapse',
                    'components/za-drawer',
                    'components/za-table',
                    'components/za-timeline',
                    'components/za-popover',
                    'components/za-tooltip',
                    'components/za-tree',
                    'components/za-trend',
                    'components/za-ellipsis',
                    'components/za-tag',
                ],
            },
            {
                title: '反馈',
                children: [
                    'components/za-alert',
                    'components/za-message',
                    'components/za-modal',
                    'components/za-notification',
                    'components/za-progress',
                    'components/za-spin',
                ],
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
