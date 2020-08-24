import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Steps = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Steps.defaultProps = {};

export default Steps;
