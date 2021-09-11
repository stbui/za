const palette = {
    common: {},

    primary: '#0070F3',
    error: '#A51C30',

    grey: {
        100: '#EAEAEA',
        200: '#C9C5C5',
        300: '#888',
        400: '#666',
    },
};

export default {
    colorPrimary100: '#f2f6ff',

    primary: palette.primary,
    default: '#00bc70',
    success: 'rgb(255, 61, 113)',
    info: 'rgb(0, 214, 143)',
    warning: 'rgb(255, 170, 0)',

    'primary-color': palette.primary,
    'link-color': '#1890ff',
    'success-color': '#52c41a',
    'warning-color': '#faad14',
    'error-color': ' #f5222d',

    'text-color': 'rgba(0, 0, 0, 0.65)',
    'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
    'disabled-color': 'rgba(0, 0, 0, 0.25)',
    'border-color-base': '#d9d9d9',

    'font-size-base': '14px',

    fonts: {
        default: '"Comic Sans MS", sans-serif',
        heading: '"Helvetica", sans',
    },
    palette: {
        primary: '#574feb',
        success: '#0a7d33',
        danger: '#da1717',
        warning: '#ed9c22',
    },
    Button: {
        defaultProps: {
            palette: 'primary',
        },
    },
};
