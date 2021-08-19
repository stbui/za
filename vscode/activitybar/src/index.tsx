import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/vs-theme';
import Icon from '@stbui/vs-icon';

const Root = styled.div`
    ${({ theme }) => css`
        width: 48px;
        height: 100%;
        background-color: ${theme.activitybarColor};

        .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 48px;
            height: 755px;
        }

        .monaco-action-bar {
            white-space: nowrap;
            height: 100%;
            text-align: left;
            background-color: inherit;
        }

        .vertical {
        }

        .actions-container {
            display: flex;
            margin: 0 auto;
            padding: 0;
            height: 100%;
            width: 100%;
            align-items: center;
            display: inline-block;
        }

        .action-item {
            display: block;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
            display: block;
            position: relative;

            &:before {
                position: absolute;
                content: '';
                width: 48px;
                height: 2px;
                display: block;
                background-color: transparent;
                transition-property: background-color;
                transition-duration: 0ms;
                transition-delay: 0.1s;

                margin-top: -3px;
                margin-bottom: 1px;
            }
        }

        .active-item-indicator {
            pointer-events: none;

            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                height: 100%;
                width: 0;
                border-left: 2px solid;

                top: 0;
                height: 100%;

                border-left-color: #ffffff;
            }
        }
    `}
`;

const ActionLabel = styled(Icon)`
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 48px;
    height: 48px;
    margin-right: 0;
    box-sizing: border-box;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.4);

    &:hover {
        color: #fff;
    }
`;

export const Activitybar = props => {
    const { title, content, footer, ...other } = props;

    const [checked, setChecked] = useState(0);

    const items = [
        {
            type: 'files',
            badge: 0,
        },
        {
            type: 'search',
            badge: 0,
        },
        {
            type: 'sourceControl',
            badge: 0,
        },
        {
            type: 'debugAlt2',
            badge: 0,
        },
        {
            type: 'extensions',
            badge: 0,
        },
    ];

    return (
        <Root {...other}>
            <div className="content">
                <div>
                    <div className="monaco-action-bar vertical">
                        <ul className="actions-container">
                            {items.map((item, key) => (
                                <li
                                    className="action-item icon checked"
                                    onClick={() => setChecked(key)}
                                >
                                    <ActionLabel
                                        type={item.type}
                                        style={{
                                            color:
                                                checked === key
                                                    ? '#fff'
                                                    : undefined,
                                        }}
                                    />
                                    {checked === key ? (
                                        <div className="active-item-indicator"></div>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="monaco-action-bar vertical">
                        <ul className="actions-container">
                            <li className="action-item icon">
                                <ActionLabel type="account" />
                            </li>
                            <li className="action-item icon">
                                <ActionLabel type="settingsGear" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Root>
    );
};

Activitybar.defaultProps = {
    theme: themes.default,
};

export default Activitybar;
