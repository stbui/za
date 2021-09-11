import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import mapping from './mapping';
import CodiconFontWoff from './codicon.ttf';

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    type: string;
}

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${CodiconFontWoff}) format("truetype");
    }
`;

const getType = ({ type }) => mapping[type];

const Root = styled.a<IconProps>`
    font: normal normal normal 16px/1 codicon;
    display: inline-block;
    text-decoration: none;
    text-rendering: auto;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;

    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;

    font-size: 16px;

    :before {
        content: '${getType}';
    }
`;

const Icon: React.FC<IconProps> = props => {
    return (
        <>
            <GlobalFonts />
            <Root {...props} />
        </>
    );
};

export default Icon;
