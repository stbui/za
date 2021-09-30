import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/vs-theme';
import Icon from '@stbui/vs-icon';
import Activitybar from '@stbui/vs-activitybar';
import Statusbar from '@stbui/vs-statusbar';
import Sidebar from '@stbui/vs-sidebar';
import Pane from '@stbui/vs-pane';
import Tabs from '@stbui/vs-tabs';
import SplitPane from '@stbui/vs-split-pane';

const SplitContainer = styled.div`
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
`;

const SplitView = styled.div`
    white-space: normal;
    position: absolute;
    width: 100%;
`;

const Root = styled.div`
    position: relative;
    width: 1000px;
    height: 549px;

    color: #cccccc;

    ${({ theme }) => css`
        .split-view-view {
            height: 100%;
            left: 0px;
            width: 48px;
        }
    `}
`;

const SplitViewLeft = styled(SplitView)`
    left: 0px;
    width: 48px;
`;
const SplitViewSidebar = styled(SplitView)`
    left: 48px;
    width: 279px;
`;
const SplitViewCenter = styled(SplitView)`
    left: 327px;
    width: 1123px;
`;

const SplitViewExplorer = styled(SplitView)`
    top: 44px;
    height: 371.667px;
    width: 1123px;
`;

const Terminal = styled.div`
    background-color: rgb(30, 30, 30);
    border-left-color: rgba(128, 128, 128, 0.35);
    border-right-color: rgba(128, 128, 128, 0.35);
`;

const Actionbar = styled.div`
    .actions-container {
        display: flex;
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;
        align-items: center;
    }

    .action-item {
        display: block;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        text-transform: uppercase;
        font-size: 11px;
        padding: 4px 10px 3px;
        display: flex;

        padding-left: 12px;
    }

    .action-label {
        font-size: 11px;
        padding: 3px;
        border-radius: 5px;

        margin-right: 0;
        padding: 2px;

        background: none !important;
        border-radius: 0;

        margin-bottom: 1px;

        color: rgba(231, 231, 231, 0.6);
    }
`;

const Badge = styled.div`
    .badge-content {
    }
`;

export const VSCode = props => {
    const { title, content, footer, ...other } = props;

    return (
        <Root {...other}>
            <SplitPane split="vertical" minSize={327} defaultSize={327}>
                <div>
                    <SplitViewLeft>
                        <Activitybar />
                    </SplitViewLeft>
                    <SplitViewSidebar>
                        <Sidebar>
                            <SplitContainer>
                                <SplitViewExplorer>
                                    <Pane></Pane>
                                </SplitViewExplorer>
                            </SplitContainer>
                        </Sidebar>
                    </SplitViewSidebar>
                </div>

                <SplitPane split="horizontal" defaultSize={304}>
                    <SplitView>
                        <Tabs></Tabs>
                    </SplitView>
                    <SplitView>
                        <Terminal>
                            <Actionbar>
                                <ul className="actions-container">
                                    <li className="action-item">
                                        <a className="action-label">Problems</a>
                                    </li>
                                    <li className="action-item">
                                        <a className="action-label">Output</a>
                                    </li>
                                    <li className="action-item">
                                        <a className="action-label">
                                            调试控制台
                                        </a>
                                    </li>
                                    <li className="action-item checked">
                                        <a className="action-label">终端</a>
                                    </li>
                                </ul>
                            </Actionbar>
                            <div className="content" style={{ height: 213 }}>
                                1111
                            </div>
                        </Terminal>
                    </SplitView>
                </SplitPane>
            </SplitPane>

            {/* <SplitContainer>
                <SplitViewLeft></SplitViewLeft>
                <SplitViewSidebar></SplitViewSidebar>
                <SplitViewCenter>
                    <SplitView style={{ top: 0, height: 308.667 }}></SplitView>
                    <SplitView
                        style={{ top: 308.667, height: 208 }}
                    ></SplitView>
                </SplitViewCenter>
            </SplitContainer> */}

            {/* <Statusbar /> */}
        </Root>
    );
};

VSCode.defaultProps = {
    theme: themes.default,
};

export default VSCode;
