import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { compileComponent } from './compileComponent';
import styled from 'styled-components';
import { ErrorBoundary } from './ErrorBoundary';

const StyledPreview = styled.div`
    margin: 2em 0 -1.5em 0;
    padding: 12px;
    border: 1px solid rgba(33, 33, 33, 0.15);
`;

const Context = React.createContext('');

const Provider = ({ children }) => (
    <Context.Provider value="1">{children}</Context.Provider>
);

export function PlaygroundPreview({ code, modules, componentName }: any) {
    const ref = useRef(null);
    const [error, setError] = useState(null);

    const handleError = useCallback(e => {
        setError(e);
        console.error(e);
    }, []);

    const [rendered, setRendered] = useState(() => {
        try {
            const Example = compileComponent(code, modules, componentName);
            return <Example />;
        } catch (e) {
            handleError(e);
        }
        return null;
    });

    const unmount = useCallback(() => {
        if (ref.current) {
            setRendered(null);
            ReactDOM.unmountComponentAtNode(ref.current);
        }
    }, []);

    const renderChildren = useCallback(
        (children: React.ReactNode) => <Provider>{children}</Provider>,
        []
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null);
            try {
                const Example = compileComponent(code, modules, componentName);
                unmount();
                ReactDOM.render(renderChildren(<Example />), ref.current);
            } catch (e) {
                unmount();
                handleError(e);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [code, modules, componentName, renderChildren, handleError, unmount]);

    useEffect(() => {
        return () => unmount();
    }, [unmount]);

    return (
        <ErrorBoundary>
            <StyledPreview>
                {error}
                <div ref={ref}>{renderChildren(rendered)}</div>
            </StyledPreview>
        </ErrorBoundary>
    );
}
