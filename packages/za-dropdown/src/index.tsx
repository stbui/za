import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Dropdown = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Dropdown.defaultProps = {};

export default Dropdown;
