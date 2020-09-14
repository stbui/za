import React from 'react';
import styled from 'styled-components';

export interface ProgressProps {
    width: number;
    variant?: 'success' | 'info' | 'warning' | 'danger';
    textAlign?: 'left' | 'center' | 'right';
}

export const ProgressRoot = styled.div`
    position: relative;
    display: flex;
    height: 1rem;
    line-height: 0;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
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
`;

export const ProgressText = styled.div`
    position: absolute;
    padding-left: 4px;
    height: 1rem;
    line-height: 1rem;
`;

export const getFromValueColor = (value: number) => {
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

export const Progress = ({ children, variant, value, textAlign }) => (
    <ProgressRoot>
        <ProgressBar
            variant={variant}
            width={value}
            textAlign={textAlign}
            style={{ background: getFromValueColor(value) }}
        ></ProgressBar>
        <ProgressText>{children}</ProgressText>
    </ProgressRoot>
);

Progress.defalutProps = {
    width: 0,
    variant: 'info',
    maxValue: 100,
};

export default Progress;
