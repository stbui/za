import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const FooterToolbar = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

FooterToolbar.defaultProps = {};

export default FooterToolbar;
