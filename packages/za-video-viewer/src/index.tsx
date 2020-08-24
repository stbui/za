import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const VideoViewer = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

VideoViewer.defaultProps = {};

export default VideoViewer;
