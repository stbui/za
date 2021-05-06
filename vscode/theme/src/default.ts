const palette = {
    common: {},

    primary: {
        main: '#0070F3',
        light: '#146DD6',
    },
    error: {
        main: '#A51C30',
        light: '#A7333F',
    },
    grey: {
        100: '#EAEAEA',
        200: '#C9C5C5',
        300: '#888',
        400: '#666',
    },
};

const defaultTheme = {
    colorPrimary100: '#f2f6ff',
    colorPrimary200: '#d9e4ff',
    colorPrimary300: '#a6c1ff',
    colorPrimary400: '#598bff',
    colorPrimary500: '#3366ff',
    colorPrimary600: '#274bdb',
    colorPrimary700: '#1a34b8',
    colorPrimary800: '#102694',
    colorPrimary900: '#091c7a',

    backgroundColor1: 'rgb(51, 51, 51)',
    backgroundColor2: 'rgb(45, 45, 45)',

    activitybarColor: 'rgb(51, 51, 51)',
    tabsColor: 'rgb(45, 45, 45)',

    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
        blue: '#07c',
        lightgray: '#f6f6ff',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants: {},
    text: {},
    button: {
        primary: '#00bc70',
    },
    alert: {
        primary: { color: '#fff', background: '#00bc70', border: '#00bc70' },
    },
};

export default defaultTheme;
