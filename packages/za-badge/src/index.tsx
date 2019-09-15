import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Badge = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Badge.defaultProps = {};

export default Badge;
