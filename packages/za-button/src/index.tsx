import styled, { css } from 'styled-components';
export interface ButtonProps {
    children: any;
    theme?: any;
    disabled?: boolean;
    shape?: 'circle' | 'round' | 'normal';
    type?: any;
    ghost?: boolean;
}

const setTheme = theme => {
    return css`
        background-color: ${theme.bg};
        border-color: ${theme.bg};
        color: ${theme.color};

        &:hover:not(.rb-button--disabled) {
            background-color: ${theme.bg};
            border-color: ${theme.bg};
            color: ${theme.color};
        }

        &:focus:not(.rb-button--disabled) {
            background-color: ${theme.bg};
            border-color: ${theme.bg};
            color: ${theme.color};

            box-shadow: 0 0 0 var(--rb-focus-ring-width)
                hsla(
                    var(--rb-color-primary-hue),
                    var(--rb-color-primary-saturation),
                    50%,
                    var(--rb-focus-ring-alpha)
                );
        }

        &:active:not(.rb-button--disabled) {
            background-color: ${theme.bg};
            border-color: ${theme.bg};
            color: ${theme.color};
        }
    `;
};

const variant: any = ({ type, theme }) => {
    return setTheme(theme.button[type]);
};

const shape: any = ({ shape }) => {
    const shape_round = css`
        border-radius: 1000px;
    `;

    const shape_normal = css`
        border-radius: 4px;
    `;

    switch (shape) {
        case 'round':
            return shape_round;
        case 'normal':
        default:
            return shape_normal;
    }
};

const ButtonRoot = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    position: relative;

    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: inherit;

    padding: 4px 12px;
    line-height: 1.5;

    border-style: solid;
    border-width: 1px;

    color: #fff;
    font-weight: 400;

    &::-moz-focus-inner {
        border: 0;
    }

    &:focus {
        outline: none;
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${variant}

    ${shape}
`;

ButtonRoot.defaultProps = {
    type: 'default',
    theme: {
        button: {
            default: {
                color: '#fff',
                bg: '#952ae6',
            },
            primary: {
                color: '#fff',
                bg: '#f00',
            },
        },
    },
};

export default ButtonRoot;
