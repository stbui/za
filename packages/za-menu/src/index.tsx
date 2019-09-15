import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Menu = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Menu.defaultProps = {};

export default Menu;
