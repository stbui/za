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
    text-decoration: none;
    text-rendering: auto;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ size }) => css`
        width: ${size}px;
        height: ${size}px;
        font-size: ${size}px;
    `}
`;

const Icon: React.FC<IconProps> = props => {
    const { type } = props;
    const IconType =
        'Ai' + type.substring(0, 1).toUpperCase() + type.substring(1);

    console.log(type);

    return <Root {...props}>{React.createElement(ai[IconType])}</Root>;
};

Icon.defaultProps = {
    size: 16,
};

export default Icon;
