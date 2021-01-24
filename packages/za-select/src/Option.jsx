import React from 'react';
import styled from 'styled-components';

export const Root = styled.li`
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 14px;
    display: flex;
    align-items: center;
    clear: both;
    font-weight: 400;
    color: #343434;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #e3fcee;
    }

    &.active {
        color: #00bc70;
    }
`;

export default props => {
    const { value, record, children, onClick } = props;

    const handleClick = () => onClick && onClick(value, record);

    return <Root onClick={handleClick}>{children}</Root>;
};
