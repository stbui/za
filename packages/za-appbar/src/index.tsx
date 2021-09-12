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

const AppBarRoot = styled.header<AppBarProps>`
    width: 100%;
    display: flex;
    z-index: 1000;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;

    background: ${props => (props.color ? props.color : '#fff')};

    ${props => (props.position === 'fixed' ? Fixed : null)}
`;

export default AppBarRoot;
