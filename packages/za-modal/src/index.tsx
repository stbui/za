import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Modal = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Modal.defaultProps = {};

export default Modal;
