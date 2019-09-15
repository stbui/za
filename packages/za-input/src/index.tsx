import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Input = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Input.defaultProps = {};

export default Input;
