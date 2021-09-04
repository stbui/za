import React from 'react';
import styled, { css } from 'styled-components';
import * as ai from 'react-icons/ai';

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    type: string;
    size?: number;
}

const Root = styled.span<IconProps>`
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    svg {
        display: inline-block;
    }

    ${({ size }) => css`
        font-size: ${size}px;
    `}
`;

const Icon: React.FC<IconProps> = props => {
    const { type } = props;
    const IconType = 'Ai' + type;

    return <Root {...props}>{React.createElement(ai[IconType])}</Root>;
};

Icon.defaultProps = {
    size: 16,
};

export default Icon;
