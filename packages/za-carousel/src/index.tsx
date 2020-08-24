import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Carousel = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Carousel.defaultProps = {};

export default Carousel;
