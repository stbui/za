import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Tag = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Tag.defaultProps = {};

export default Tag;
