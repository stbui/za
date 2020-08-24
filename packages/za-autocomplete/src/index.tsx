import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const AutoComplete = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

AutoComplete.defaultProps = {};

export default AutoComplete;
