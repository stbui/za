import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const CopyToClipboard = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

CopyToClipboard.defaultProps = {};

export default CopyToClipboard;
