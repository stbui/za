import React from 'react';
import styled from 'styled-components';
import Overlay from '@stbui/za-overlay';

export const ModalStyle = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0; */

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
    background-color: black;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
`;

export const ModalDialog = styled.div`
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
`;

export const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
`;

export const ModalTitle = styled.div`
    margin-bottom: 0;
    line-height: 1.5;
`;

export const ModalBody = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
`;

export const Modal = props => {
    const { title, content, footer, ...other } = props;

    return (
        <Overlay>
            <ModalStyle {...props}>
                <Background onClick={props.toggle} />
                <Content>{props.children}</Content>
            </ModalStyle>
        </Overlay>
    );
};

Modal.defaultProps = {};

export default Modal;
