import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Notification = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Notification.defaultProps = {};

export default Notification;
