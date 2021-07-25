import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';
export interface ButtonProps {
    children: any;
    disabled?: boolean;
    shape?: 'circle' | 'round' | 'normal';
    type?: any;
    ghost?: boolean;
}


const types: any = ({ theme, type }) => {
    const mode = theme[type];

    return css`
        background-color: ${mode};
        border-color: ${mode};

        &:hover,
        &:focus {
            color: white;
        }

        &:active {
        }
    `;
};

const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    position: relative;

    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;

    padding: 4px 12px;
    line-height: 1.5;

    border-style: solid;
    border-width: 1px;

    color: #fff;
    font-weight: 400;

    &:focus {
        outline: none;
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${({ theme }) => css`
        &:hover,
        &:focus {
            opacity: 0.8;
            color: #fff;
        }

        &:active {
        }
    `}

    ${types}
`;

Button.defaultProps = {
    type: 'primary',
    theme: themes.default,
};

export default Button;
