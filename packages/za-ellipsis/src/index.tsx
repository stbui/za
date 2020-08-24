import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Ellipsis = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Ellipsis.defaultProps = {};

export default Ellipsis;
