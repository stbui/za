import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Divider = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Divider.defaultProps = {};

export default Divider;
