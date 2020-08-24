import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Text = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Text.defaultProps = {};

export default Text;
