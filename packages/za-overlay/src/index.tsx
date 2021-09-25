import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

interface ProtalOptions {
    closeOnOutSide?: boolean;
    className?: string;
    rootContainer?: HTMLElement;
    defaultShow?: boolean;
    mask?: boolean;
}

const OverlayStyle = styled.div<ProtalOptions>`
    ${({ mask }) =>
        mask &&
        css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
        `}}
`;

export const useProtal = ({
    closeOnOutSide = true,
    className,
    rootContainer = document.body,
    defaultShow = false,
    mask = true,
}: ProtalOptions = {}) => {
    const [isShow, setShow] = useState(defaultShow);

    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    const onShow = useCallback(() => {
        setShow(true);
    }, []);

    const Protal = useCallback(
        ({ children }: { children: React.ReactNode }) => {
            if (!isShow) return null;

            return ReactDOM.createPortal(
                <OverlayStyle
                    mask={mask}
                    className={className}
                    onClick={closeOnOutSide ? onClose : () => {}}
                >
                    {children}
                </OverlayStyle>,
                rootContainer
            );
        },
        [isShow, className, rootContainer, closeOnOutSide]
    );

    return {
        Protal,
        isShow,
        onClose,
        onShow,
    };
};

export const Overlay: React.FC<{ children: React.ReactNode }> = props => {
    const { children, ...reset } = props;
    const { Protal, onClose, onShow, isShow } = useProtal(reset);

    return <Protal {...reset}>{props.children}</Protal>;
};

export default useProtal;
