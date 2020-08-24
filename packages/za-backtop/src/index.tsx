import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const BackTop = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

BackTop.defaultProps = {};

export default BackTop;
