import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Tooltip = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Tooltip.defaultProps = {};

export default Tooltip;
