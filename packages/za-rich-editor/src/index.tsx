import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 320px;
    border: 1px solid #e1e3e6;

    .editor-head {
        display: block;
        padding: 0 14px 5px;
        border: none;
        border-radius: 2px 2px 0 0;
        border-bottom: none;
        background: #fafbfc;
        white-space: normal;
    }

    .editor-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-top: 1px solid #e1e3e6;
        overflow: hidden;
    }
`;

export const RichEditor = props => {
    const { ...other } = props;

    return (
        <Root {...other}>
            <div className="editor-head"></div>
            <div className="editor-body"></div>
        </Root>
    );
};

RichEditor.defaultProps = {};

export default RichEditor;
