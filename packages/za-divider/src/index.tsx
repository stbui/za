import React from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps {
    type?: 'horizontal' | 'split' | 'vertical';
    orientation?: 'left' | 'right' | '' | 'top' | 'bottom';
    dashed?: boolean;
    textStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

const horizontal = css`
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    clear: both;
`;

const split = css`
    margin: 0 8px;
    display: inline-block;
    height: 0.9em;
    width: 1px;
    vertical-align: middle;
    position: relative;
    top: -0.06em;
`;

const vertical = css<DividerProps>`
    margin: 0 16px;
    height: 100%;
    background: transparent;
    border-right: 1px solid;
`;

const types: any = {
    horizontal,
    split,
    vertical,
};

const left = css`
    &:before {
        top: 50%;
        width: 5%;
    }

    &:after {
        top: 50%;
        width: 95%;
    }
`;

const right = css`
    &:before {
        top: 50%;
        width: 95%;
    }

    &:after {
        top: 50%;
        width: 5%;
    }
`;

const directions = {
    left,
    right,
};

const DividerStyle = styled.div<DividerProps>`
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    background: #e9e9e9;

    ${({ theme, type, dashed, direction, hasChild }) => css`
        ${type && types[type]}

        ${hasChild &&
        css`
            display: table;
            white-space: nowrap;
            text-align: center;
            background: transparent;
            color: rgba(0, 0, 0, 0.85);
            font-size: 16px;
            margin: 16px 0;

            &:before,
            &:after {
                content: '';
                display: table-cell;
                position: relative;
                top: 50%;
                width: 50%;
                border-top: 1px solid #e9e9e9;
                transform: translateY(50%);
            }

            ${directions[direction]}
        `}
    `}
`;

const Divider = (props: DividerProps) => {
    const { type, dashed, orientation, children } = props;

    const verticalText =
        type === 'vertical' &&
        children &&
        children
            .toString()
            .split('')
            .map((text, i) => (
                <span className={`divider-vertical-child`} key={i}>
                    {text}
                </span>
            ));

    return (
        <DividerStyle {...props} direction={orientation} hasChild={children}>
            {children && (
                <span className="divider-inner-text">
                    {verticalText ? verticalText : children}
                </span>
            )}
        </DividerStyle>
    );
};

Divider.defaultProps = {
    type: 'horizontal',
};

export default Divider;
