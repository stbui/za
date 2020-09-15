import React from 'react';
import styled from 'styled-components';

export interface ProgressProps {
    width?: number | string;
    variant?: 'success' | 'info' | 'warning' | 'danger';
    textAlign?: 'left' | 'center' | 'right';
    square?: boolean;
    autoChangeColor?: boolean;
    value?: number | string;
}

export const getFromValueColor = (value: any) => {
    let color = '#84e19a';
    if (value >= 60 && value < 80) {
        color = '#ffd966';
    } else if (value >= 80) {
        color = '#e87d88';
    } else {
        color = '#84e19a';
    }

    return color;
};

export const ProgressRoot = styled.div<ProgressProps>`
    position: relative;
    display: flex;
    height: 1rem;
    line-height: 0;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: ${({ square }) => (square ? 0 : '0.25rem')};
`;

export const ProgressBar = styled.div<ProgressProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.6s ease;
    color: #fff;

    text-align: ${props => props.textAlign};
    width: ${props => props.width}%;

    background-color: ${props => getFromValueColor(props.value)};
`;

export const ProgressText = styled.div`
    position: absolute;
    padding-left: 4px;
    height: 1rem;
    line-height: 1rem;
`;

export const Progress = ({ children, variant, value, textAlign, square }) => (
    <ProgressRoot square={square}>
        <ProgressBar
            variant={variant}
            width={value}
            value={value}
            textAlign={textAlign}
        ></ProgressBar>
        <ProgressText>{children}</ProgressText>
    </ProgressRoot>
);

Progress.defalutProps = {
    value: 0,
    variant: 'info',
    maxValue: 100,
    square: true,
};

export default Progress;
