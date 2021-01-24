import React from 'react';
import styled from 'styled-components';
import Mask from '@stbui/za-mask';

export const ModalRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
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
        <React.Fragment>
            <Mask></Mask>
            <ModalRoot {...other}>
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                        </ModalHeader>
                        <ModalBody>{content}</ModalBody>
                        <ModalFooter>{footer}</ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </ModalRoot>
        </React.Fragment>
    );
};

Modal.defaultProps = {};

export default Modal;
