import React from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

export interface ProgressProps {
    width?: number | string;
    variant?: 'success' | 'info' | 'warning' | 'danger';
    textAlign?: 'left' | 'center' | 'right';
    square?: boolean;
    autoChangeColor?: boolean;
    value?: number | string;
}

export const ProgressStyle = styled.div<ProgressProps>`
    ${({ theme }) => css`
        display: block;

        .progress-container {
            overflow: hidden;
            border-radius: 0.25rem;

            height: 1.375rem;

            background-color: rgb(237, 241, 247);
        }

        .progress-value {
            height: 100%;
            width: 20%;
            text-align: center;
            overflow: hidden;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
            transition-duration: 400ms;
            transition-property: width, background-color;

            font-size: 0.9375rem;
            font-weight: 600;
            line-height: 1.5rem;

            background-color: rgb(0, 149, 255);
            color: rgb(255, 255, 255);
        }
    `}
`;

export const Progress = props => {
    const { children, value, displayValue } = props;

    return (
        <ProgressStyle {...props}>
            <div className="progress-container">
                <div className="progress-value">
                    {displayValue && <span>{value}%</span>}
                    {children}
                </div>
            </div>
        </ProgressStyle>
    );
};

Progress.defalutProps = {
    value: 0,
    variant: 'info',
    maxValue: 100,
    square: true,

    size: 'normal',

    theme: themes.default,
};

export default Progress;
