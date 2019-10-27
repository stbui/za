import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styled, { css } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/jsx/jsx');
    require('codemirror/mode/htmlmixed/htmlmixed');
    require('codemirror/addon/edit/closebrackets');
    require('codemirror/addon/edit/matchbrackets');
    require('codemirror/addon/edit/matchtags');
    require('codemirror/addon/edit/closetag');
    require('codemirror/addon/fold/xml-fold');
    require('codemirror/addon/scroll/simplescrollbars');
    require('codemirror/addon/selection/active-line');
    require('codemirror/addon/display/autorefresh');
}

const StyledCodeMirror: any = styled(CodeMirror)`
    margin: 2em 0;
    font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
    font-size: 0.9375em;
    pre& {
        background-color: #282a36 !important;
        color: #f8f8f2 !important;
        border-radius: 0.25em;
        padding: 1em 1.5em;
        ${({ maxHeight }: any) => maxHeight && `max-height:${maxHeight}`};
        overflow: auto;
        box-sizing: border-box;
    }
    .CodeMirror {
        font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
    }
    .CodeMirror-scroll {
        ${({ maxHeight }: any) => maxHeight && `max-height:${maxHeight}`};
        -webkit-overflow-scrolling: touch;
    }

    ${({ readOnly }: any) =>
        readOnly &&
        css`
            .CodeMirror-lines {
                cursor: auto;
            }
            .CodeMirror-cursors {
                display: none;
            }
        `}
`;

export function PlaygroundEditor({
    code,
    update,
    readOnly,
    lineWrapping,
    mode,
    autoRefresh,
    maxHeight,
    ...other
}: any) {
    const [enabled, setEnabled] = useState(false);
    const [ready, setReady] = useState(false);

    const value = readOnly ? code.trim() : code;

    const _readOnly = typeof readOnly !== 'undefined' ? readOnly : !enabled;
    const className = [other.className, !enabled && !readOnly && 'disabled']
        .filter(Boolean)
        .join(' ');

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    if (typeof window === 'undefined' || !ready) {
        return (
            <pre className={className}>{readOnly ? value : `${value}\n`}</pre>
        );
    }

    return (
        <>
            <GlobalStyle theme="stbui"></GlobalStyle>
            <StyledCodeMirror
                value={value}
                className={className}
                maxHeight={maxHeight}
                options={{
                    mode,
                    theme: 'stbui',
                    lineNumbers: true,
                    tabSize: 2,
                    scrollbarStyle: 'overlay',
                    readOnly: _readOnly,

                    cursorBlinkRate: _readOnly ? -1 : 530,
                    styleActiveLine: !_readOnly,
                    smartIndent: !_readOnly,
                    matchBrackets: !_readOnly,
                    autoCloseBrackets: !_readOnly,
                    autoCloseTags: !_readOnly,
                    matchTags: !_readOnly,
                    lineWrapping: lineWrapping,
                    autoRefresh: autoRefresh,
                    extraKeys: enabled
                        ? {}
                        : {
                              Tab: false,
                              'Shift-Tab': false,
                          },
                }}
                onBeforeChange={(_, __, val) => update(val)}
                onMouseDown={() => setEnabled(true)}
                onTouchStart={() => setEnabled(true)}
                onBlur={() => setEnabled(false)}
                onFocus={() => {}}
                onKeyDown={(_, event: KeyboardEvent) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setEnabled(true);
                    } else if (event.key === 'Escape') {
                        event.preventDefault();
                        setEnabled(false);
                    }
                }}
            />
        </>
    );
}
