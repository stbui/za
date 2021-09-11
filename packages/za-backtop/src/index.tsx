import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const BackTop = props => {
    const { duration, ...other } = props;

    const scrollToTop = () => {
        const startTime = Date.now();
    };

    return <Root {...other} onClick={scrollToTop}></Root>;
};

BackTop.defaultProps = {};

export default BackTop;
