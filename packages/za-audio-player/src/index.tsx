import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const AudioPlayer = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

AudioPlayer.defaultProps = {};

export default AudioPlayer;
