import React from 'react';
import styled from 'styled-components';

export interface ProgressProps {
    width: number;
    variant?: 'success' | 'info' | 'warning' | 'danger';
    textAlign?: 'left' | 'center' | 'right';
}

export const ProgressRoot = styled.div`
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
    padding-left: 8px;

    background-color: #007bff;

    text-align: ${props => props.textAlign};
    width: ${props => props.width}%;
`;

export const getFromValueColor = (value: number) => {
    let color = '#28a745';
    if (value >= 60 && value < 80) {
        color = '#ffc107';
    } else if (value >= 80) {
        color = '#dc3545';
    } else {
        color = '#28a745';
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
        >
            {children}
        </ProgressBar>
    </ProgressRoot>
);

Progress.defalutProps = {
    width: 0,
    variant: 'info',
};

export default Progress;
