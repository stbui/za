import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Heading = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Heading.defaultProps = {};

export default Heading;
