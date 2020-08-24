import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const LoadMore = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

LoadMore.defaultProps = {};

export default LoadMore;
