import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Transfer = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Transfer.defaultProps = {};

export default Transfer;
