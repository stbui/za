import React from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

interface AlertProps {
    type?: 'success' | 'info' | 'warning' | 'error';
    closable?: boolean;
    onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AlertStyle = styled.div<AlertProps>`
    ${({ theme, type, closable }) => css`
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 0.25rem;
        box-shadow: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 0.9375rem;
        font-weight: 600;
        line-height: 1.5rem;
        padding: 1rem 3rem 1rem 1.125rem;
        margin-bottom: 1.5rem;

        background-color: ${theme[type]};
        color: rgb(255, 255, 255);

        .alert-close {
            padding: 1rem 1.125rem;
            font-size: 1.5rem;
            line-height: 1;
            cursor: pointer;
            font-family: monospace;
            position: absolute;
            top: 0;
            ${theme.dir === 'rtl' ? 'left' : 'right'}: 0;
            color: inherit;
            background-color: transparent;
            border: 0;
            -webkit-appearance: none;
            outline: none;
        }
    `}
`;

export const Alert = props => {
    const { children, closable, onClose } = props;

    const onClick = () => {
        onClose && onClose();
    };

    return (
        <AlertStyle {...props}>
            {closable && (
                <button onClick={onClick} type="button" className="alert-close">
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
            {children}
        </AlertStyle>
    );
};

Alert.defaultProps = {
    theme: themes.default,
};

export default Alert;
