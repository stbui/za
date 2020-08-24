import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const TreeSelect = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

TreeSelect.defaultProps = {};

export default TreeSelect;
