import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Trend = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Trend.defaultProps = {};

export default Trend;
