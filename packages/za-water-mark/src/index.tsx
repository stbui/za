import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Upload = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Upload.defaultProps = {};

export default Upload;
