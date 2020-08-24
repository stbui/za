import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Spin = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Spin.defaultProps = {};

export default Spin;
