import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '@stbui/vs-icon';

const TabsRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    cursor: grab;
    background-color: rgb(37, 37, 38);

    .tabs-and-actions-container {
        display: flex;
        position: relative;
    }

    .editor-actions {
        cursor: default;
        flex: initial;
        padding: 0 8px 0 4px;
        height: 35px;
    }

    .tabs-container {
        display: flex;
        height: 35px;
        scrollbar-width: none;
    }

    .tab {
        position: relative;
        display: flex;
        white-space: nowrap;
        cursor: pointer;
        height: 35px;
        box-sizing: border-box;
        padding-left: 10px;

        width: 120px;
        min-width: fit-content;
        min-width: -moz-fit-content;
        flex-shrink: 0;

        left: auto;
        border-right: 1px solid rgb(37, 37, 38);
        background-color: rgb(45, 45, 45);
        color: rgba(255, 255, 255, 0.5);

        &.active {
            left: auto;
            border-right: 1px solid rgb(37, 37, 38);
            background-color: rgb(30, 30, 30);
            color: rgb(255, 255, 255);
        }
    }

    .tab-label {
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;

        margin-top: auto;
        margin-bottom: auto;
        line-height: 35px;

        white-space: nowrap;
        flex: 1;

        overflow: visible;

        &:before {
            background-size: 16px;
            background-position: 0;
            background-repeat: no-repeat;
            padding-right: 6px;
            width: 16px;
            height: 22px;
            line-height: inherit !important;
            display: inline-block;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            vertical-align: top;
            flex-shrink: 0;
            height: 35px;
            cursor: pointer;
        }
    }

    .tab-actions {
        margin-top: auto;
        margin-bottom: auto;
        width: 28px;
    }

    .monaco-action-bar {
        white-space: nowrap;
        height: 100%;
        // width: 28px;
    }

    .actions-container {
        display: flex;
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;
        align-items: center;

        justify-content: center;
    }

    .action-item {
        display: block;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
    }

    .label-name {
        color: inherit;
        white-space: pre;
        text-decoration: none;
        font-size: 13px;
        cursor: pointer;
    }

    .monaco-icon-name-container {
        margin-top: auto;
        margin-bottom: auto;
        line-height: 35px;
        white-space: nowrap;
        cursor: pointer;
    }

    .monaco-icon-label-container {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
    }

    .editor-files {
        flex: 1;
        position: relative;
        overflow: hidden;
    }

    .monaco-toolbar {
        height: 100%;
    }

    .editor-container {
        background-color: rgb(30, 30, 30);
        height: 251.667px;
    }
`;

const CloseIcon = styled(Icon)`
    color: inherit;
    font-size: 16px;
    padding: 2px;
    width: 16px;
    height: 16px;
`;

const HistoryIcon = styled(Icon)`
    color: inherit;
    font-size: 16px;
    padding: 2px;
    width: 16px;
    height: 16px;
    color: #c5c5c5;
`;

const MoreIcon = styled(Icon)`
    color: inherit;
    font-size: 16px;
    padding: 2px;
    width: 16px;
    height: 16px;
    color: #c5c5c5;
`;

const Breadcrumbs = styled.div`
    user-select: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    outline-style: none;
    background-color: #1e1e1e;

    height: 22px;
    overflow: hidden;

    > .item {
        display: flex;
        align-items: center;
        flex: 0 1 auto;
        white-space: nowrap;
        cursor: pointer;
        align-self: center;
        height: 100%;
        outline: none;
        color: rgba(204, 204, 204, 0.8);
        max-width: 80%;
    }

    .label-name {
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 22px;
        line-height: 22px;
    }
`;

const BreadcrumbsItem = ({ children }) => {
    return (
        <div className="item">
            <div className="label-name">{children}</div>
            <Icon type="chevronRight"></Icon>
        </div>
    );
};

export const Tabs = props => {
    const { title, content, footer, ...other } = props;
    const [active, setActive] = useState(0);

    const data = [
        {
            name: 'stbui.css',
            ext: 'css',
        },
        {
            name: 'stbui.css',
            ext: 'css',
        },
        {
            name: 'stbui.css',
            ext: 'css',
        },
    ];

    return (
        <TabsRoot {...other}>
            <div className="tabs-and-actions-container">
                <div className="editor-files">
                    <div className="tabs-container">
                        {data.map((tab, key) => (
                            <div
                                draggable="true"
                                className={`tab ${
                                    active === key ? 'active' : ''
                                }`}
                                onClick={() => setActive(key)}
                            >
                                <div className="tab-border-top-container"></div>
                                <div className="tab-label">
                                    <div className="monaco-icon-label-container">
                                        <span className="monaco-icon-name-container">
                                            <a className="label-name">
                                                stbui.css
                                            </a>
                                        </span>
                                        <span className="monaco-icon-description-container"></span>
                                    </div>
                                </div>
                                <div className="tab-actions">
                                    <div className="monaco-action-bar animated">
                                        <ul className="actions-container">
                                            <li className="action-item">
                                                <CloseIcon type="close"></CloseIcon>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-border-bottom-container"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="editor-actions">
                    <div className="monaco-toolbar">
                        <div className="monaco-action-bar animated">
                            <ul className="actions-container">
                                <li className="action-item menu-entry">
                                    <HistoryIcon type="history"></HistoryIcon>
                                </li>

                                <li className="action-item" role="presentation">
                                    <div className="monaco-dropdown">
                                        <div className="dropdown-label">
                                            <MoreIcon type="more"></MoreIcon>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs-breadcrumbs">
                <Breadcrumbs>
                    <BreadcrumbsItem>stbui</BreadcrumbsItem>
                    <BreadcrumbsItem>stbui</BreadcrumbsItem>
                    <BreadcrumbsItem>stbui</BreadcrumbsItem>
                </Breadcrumbs>
            </div>
            <div className="editor-container"></div>
        </TabsRoot>
    );
};

Tabs.defaultProps = {};

export default Tabs;
