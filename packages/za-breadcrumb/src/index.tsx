import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Breadcrumb = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;
