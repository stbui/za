import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Popover = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Popover.defaultProps = {};

export default Popover;
