import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const SnackbarRoot = styled.div`
    z-index: 8;
    margin: 8px;
    display: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    pointer-events: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    position: absolute;
`;

export const SnackbarSurface = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    transform: scale(0.8);
    opacity: 0;

    /* open */
    transform: scale(1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    opacity: 1;
    pointer-events: auto;
`;

export const SnackbarLabel = styled.div`
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 14px 16px;
`;

export const SnackbarActions = styled.div`
    margin-left: 0;
    margin-right: 8px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-sizing: border-box;
`;

let timer: any = null;

const Snackbar = props => {
    const { message, action } = props;
    const [open, setOpen] = useState(props.open);

    const setDelayCloase = () => {
        clearTimeout(timer);
        timer = setTimeout(() => setOpen(false), 3000);
    };

    useEffect(() => {
        setDelayCloase();
    }, []);

    return (
        <SnackbarRoot>
            <SnackbarSurface>
                <SnackbarLabel>{message}</SnackbarLabel>
                <SnackbarActions>{action}</SnackbarActions>
            </SnackbarSurface>
        </SnackbarRoot>
    );
};

export default Snackbar;
