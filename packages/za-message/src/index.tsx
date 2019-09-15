import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Message = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Message.defaultProps = {};

export default Message;
