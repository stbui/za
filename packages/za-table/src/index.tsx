import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Table = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Table.defaultProps = {};

export default Table;
