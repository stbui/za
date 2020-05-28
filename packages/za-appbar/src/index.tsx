import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Fixed = css`
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
`;

export interface AppBarProps {
    position?: 'fixed' | string;
    color?: string;
}

const Root = styled.header<AppBarProps>`
    width: 100%;
    display: flex;
    z-index: 1000;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;

    /* color */
    background: ${props => (props.color ? props.color : '#fff')};

    /* position */
    ${props => (props.position === 'fixed' ? Fixed : null)}
`;

const AppBar: FC<AppBarProps> = ({ position, color, children, ...other }) => {
    return (
        <Root position={position} color={color} {...other}>
            {children}
        </Root>
    );
};

export default AppBar;
