import styled, { css } from 'styled-components';

export interface CheckboxStyleProps {
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    theme?: any;
    size: any;
}

export const CheckboxStyle: any = styled.label<any>`
    ${({ theme, disabled, checked, size }) => css`
        display: inline-block;
        box-sizing: border-box;

        .checkbox {
            display: inline-block;
            position: relative;
            line-height: 1;
            vertical-align: middle;
        }

        .checkbox-inner {
            display: block;
            width: 16px;
            height: 16px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #d9dbde;
            transition: all 0.1s linear;
            text-align: left;
            box-shadow: none;
        }

        .checkbox-input {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 16px;
            height: 16px;
            margin: 0;
            cursor: pointer;
        }

        .checkbox-label {
            font-size: 14px;
            color: #1f2633;
            vertical-align: middle;
            margin: 0;
            margin-left: 8px;
            margin-right: 8px;
            line-height: 1;
        }

        ${checked &&
        css`
            .checkbox-inner {
                border-color: transparent;
                background-color: ${theme.primary};
            }
        `}

        ${disabled &&
        css`
            .checkbox-inner {
                border-color: #e4e8ee;
                background: #f5f7fa;
            }

            .checkbox-label {
                color: #c4c7cc;
                cursor: not-allowed;
            }

            .checkbox-input {
                cursor: not-allowed;
            }
        `}
    `}
`;
