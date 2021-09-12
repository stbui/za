import styled, { css } from 'styled-components';

export interface SwitchStyleProps {
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    theme?: any;
    size: any;
}

const small = css`
    height: 24px;
    min-width: 44px;
`;

const medium = css`
    height: 28px;
    min-width: 48px;
`;

const sizes = { small, medium };

export const SwitchStyle: any = styled.label<any>`
    outline: none;
    text-align: left;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    overflow: hidden;
    transition: background 0.1s cubic-bezier(0.4, 0, 0.2, 1),
        border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

    position: relative;
    display: inline-block;
    border: 2px solid transparent;
    width: 48px;
    height: 28px;
    border-radius: 20px;

    margin-right: 20px;

    min-width: 48px;
    width: auto;
    overflow: initial;

    ${({ theme, disabled, checked, size }) => css`
        background-color: #f0f2f5;
        border-color: #f0f2f5;

        .switch-btn {
            transform-origin: left center;
            border: 1px solid transparent;
            position: absolute;
            border-radius: 20px;
            box-sizing: border-box;
            box-shadow: 0 1px 4px 0 rgb(0 0 0 / 16%);
            background-color: #fff;

            left: 0;

            width: 24px;
            height: 24px;
        }

        .switch-children {
            font-size: 14px;
            height: 24px;
            line-height: 24px;

            color: #8d9299;
            margin: 0 6px 0 30px;
        }

        ${checked &&
        css`
            background-color: ${theme.primary};
            border-color: transparent;

            .switch-btn {
                left: calc(100% - 24px);
            }

            .switch-children {
                color: #fff;
                margin: 0 30px 0 6px;
            }
        `}

        ${disabled &&
        css`
            background-color: #f0f2f5;
            cursor: not-allowed;
        `}

        ${size && sizes[size]}
    `}
`;
