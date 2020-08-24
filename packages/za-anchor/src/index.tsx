import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Anchor = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Anchor.defaultProps = {};

export default Anchor;
