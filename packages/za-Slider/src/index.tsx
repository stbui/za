import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Slider = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Slider.defaultProps = {};

export default Slider;
