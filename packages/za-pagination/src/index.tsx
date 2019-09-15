import React from 'react';
import styled from 'styled-components';

const Root = styled.ul`
    font-size: 12px;
    user-select: none;
    padding: 0;
`;

const Item = styled.li`
    cursor: pointer;
    color: #666;
    font-size: 10px;
    border-radius: 6px;
    list-style: none;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
`;

const Prev = styled(Item)``;
const Next = styled(Item)``;

export const Pagination = props => {
    const { ...other } = props;

    return (
        <Root {...other}>
            <Prev></Prev>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Next></Next>
        </Root>
    );
};

Pagination.defaultProps = {};

export default Pagination;
