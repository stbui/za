import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const PicturePreview = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

PicturePreview.defaultProps = {};

export default PicturePreview;
