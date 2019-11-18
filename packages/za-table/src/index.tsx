import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const HeaderContainer = styled.div``;
const BodyContainer = styled.div``;

export const Table = props => {
    const { ...other } = props;

    return <Root {...other}></Root>;
};

Table.defaultProps = {};

export default Table;
