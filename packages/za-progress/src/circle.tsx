import React from 'react';
import styled from 'styled-components';

const CircleStyle = styled.div`
    position: relative;
    display: inline-block;
    position: relative;
    vertical-align: middle;
`;

const Label = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 12px;
    color: rgb(140, 140, 140);
`;

const Circle = (props: any) => (
    <circle cx={50} cy={50} r={42} fill="transparent" {...props} />
);

const defaultRenderLabel = p => `${Math.floor(p.value)}%`;

export function CircleProgress(props) {
    const {
        value = 0,
        min = 0,
        max = 100,
        size = '116px',
        lineWidth = '8px',
        lineColor = 'brand.normal',
        renderLabel = defaultRenderLabel,
        ...rest
    } = props;

    const percent = ((value - min) * 100) / (max - min);
    const determinant = (percent ?? 0) * 2.64;
    const strokeDasharray = `${determinant} ${264 - determinant}`;

    const indicatorProps = {
        strokeDashoffset: 66,
        strokeDasharray,
        transition: `stroke-dasharray 0.6s ease 0s, stroke 0.6s ease`,
    };

    return (
        <CircleStyle {...rest}>
            <svg viewBox="0 0 100 100" width={size} height={size}>
                <Circle stroke="rgb(56 98 207)" strokeWidth={lineWidth} />
                <Circle
                    stroke="rgb(221 221 221)"
                    strokeWidth={lineWidth}
                    strokeLinecap="round"
                    {...indicatorProps}
                />
            </svg>
            <Label>{renderLabel({ value: percent })}</Label>
        </CircleStyle>
    );
}
