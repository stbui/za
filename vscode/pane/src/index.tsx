import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/vs-theme';
import Icon from '@stbui/vs-icon';

const Root = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .pane-header {
        height: 22px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        overflow: hidden;
        display: flex;
        cursor: pointer;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        font-weight: 400;

        line-height: 22px;
        background-color: rgba(0, 0, 0, 0);
        border-top: 1px solid rgba(204, 204, 204, 0.2);

        & > .title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 11px;
            min-width: 3ch;
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
        }
    }

    .pane-body {
        overflow: hidden;
        flex: 1;
    }
`;

export const Pane = props => {
    const { title, content, footer, ...other } = props;

    const [expanded, setExpanded] = useState(false);

    return (
        <Root {...other}>
            <div className="pane-header" onClick={() => setExpanded(!expanded)}>
                <Icon type={expanded ? 'chevronDown' : 'chevronRight'}></Icon>
                <h3 className="title">title</h3>
                <div className="actions"></div>
            </div>
            {expanded ? <div className="pane-body">1</div> : null}
        </Root>
    );
};

Pane.defaultProps = {
    theme: themes.default,
};

export default Pane;
