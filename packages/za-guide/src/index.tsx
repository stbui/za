import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Guide = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Guide.defaultProps = {};

export default Guide;
