import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { compileComponent } from './compileComponent';
import styled from 'styled-components';

const StyledPreview = styled.div`
    margin: 2em 0 -1.5em 0;
    padding: 1em;
    border: 1px solid rgba(33, 33, 33, 0.15000000000000002);
    border-radius: 0.25em;
`;

export function PlaygroundPreview({
    code,
    modules,
    update,
    componentName,
    ...htmlProps
}: any) {
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
        (children: React.ReactNode) => <div>{children}</div>,
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

    React.useEffect(() => {
        return () => unmount();
    }, [unmount]);

    return (
        <StyledPreview>
            <div {...htmlProps}>
                {error}
                <div ref={ref}>{renderChildren(rendered)}</div>
            </div>
        </StyledPreview>
    );
}
