import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Collapse = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Collapse.defaultProps = {};

export default Collapse;
