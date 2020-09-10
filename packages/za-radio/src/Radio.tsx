import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Radio = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Radio.defaultProps = {};

export default Radio;
