import styled, { css } from 'styled-components';

export interface ButtonProps {
    children: any;
    theme?: any;
    disabled?: boolean;
    shape?: 'circle' | 'round' | 'normal';
    type?: any;
    ghost?: boolean;
}

const ButtonRoot = styled.a<ButtonProps>`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 4px;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    width: fit-content;
    width: -moz-fit-content;
    padding: 5px 10px;
    display: inline-block;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;

    color: rgb(255, 255, 255);
    background-color: rgb(14, 99, 156);
`;

ButtonRoot.defaultProps = {};

export default ButtonRoot;
