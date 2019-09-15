import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Icon = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Icon.defaultProps = {};

export default Icon;
