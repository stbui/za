import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Cascader = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Cascader.defaultProps = {};

export default Cascader;
