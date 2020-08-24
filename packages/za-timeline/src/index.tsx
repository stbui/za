import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Timeline = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Timeline.defaultProps = {};

export default Timeline;
