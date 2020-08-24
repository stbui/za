import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Affix = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Affix.defaultProps = {};

export default Affix;
