import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const ImageLoader = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

ImageLoader.defaultProps = {};

export default ImageLoader;
