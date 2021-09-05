import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from '@stbui/za-icon';

const NotificationFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const NotificationFadeOut = keyframes`
0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
}
`;

const NotificationStyle = styled.div`
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: fixed;
    z-index: 1010;
    width: 384px;
    max-width: calc(100vw - 32px);
    margin-right: 24px;

    right: 0px;
    top: 24px;
    bottom: auto;

    .notification-notice {
        padding: 7px 20px 7px 10px;
        border-radius: 3px 3px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border: 0 solid rgba(0, 0, 0, 0);
        background: #fff;
        display: block;
        width: auto;
        line-height: 1.5;
        vertical-align: middle;
        position: relative;
        margin: 10px 0;
    }
    .notification-notice-closable {
        padding-right: 20px;
    }
    .notification-notice-close {
        position: absolute;
        right: 5px;
        top: 3px;
        color: #000;
        cursor: pointer;
        outline: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        text-shadow: 0 1px 0 #fff;
        text-decoration: none;
    }

    .notification-fade-enter {
        opacity: 0;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
    }
    .notification-fade-leave {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
    }
    .notification-fade-enter.notification-fade-enter-active {
        animation-name: rcNotificationFadeIn;
        animation-play-state: running;
    }
    .notification-fade-leave.notification-fade-leave-active {
        animation-name: rcDialogFadeOut;
        animation-play-state: running;
    }

    .notification-topLeft,
    .notification-bottomLeft {
        margin-left: 24px;
        margin-right: 0;
    }
    .notification-topLeft
        .notification-fade-enter.notification-fade-enter-active,
    .notification-bottomLeft
        .notification-fade-enter.notification-fade-enter-active,
    .notification-topLeft
        .notification-fade-appear.notification-fade-appear-active,
    .notification-bottomLeft
        .notification-fade-appear.notification-fade-appear-active {
        animation-name: NotificationLeftFadeIn;
    }
    .notification-notice {
        padding: 16px 24px;
        border-radius: 2px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background: #fff;
        line-height: 1.5;
        position: relative;
        margin-bottom: 16px;
        overflow: hidden;
    }
    .notification-notice-message {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 8px;
        line-height: 24px;
        display: inline-block;
    }
    .notification-notice-message-single-line-auto-margin {
        width: calc(384px - 24px * 2 - 24px - 48px - 100%);
        background-color: transparent;
        pointer-events: none;
        display: block;
        max-width: 4px;
        /* stylelint-disable-next-line max-nesting-depth */
    }
    .notification-notice-message-single-line-auto-margin:before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
    .notification-notice-description {
        font-size: 14px;
    }
    .notification-notice-closable .notification-notice-message {
        padding-right: 24px;
    }
    .notification-notice-with-icon .notification-notice-message {
        font-size: 16px;
        margin-left: 48px;
        margin-bottom: 4px;
    }
    .notification-notice-with-icon .notification-notice-description {
        margin-left: 48px;
        font-size: 14px;
    }
    .notification-notice-icon {
        position: absolute;
        font-size: 24px;
        line-height: 24px;
        margin-left: 4px;
    }
    .notification-notice-icon-success {
        color: #26bd71;
    }
    .notification-notice-icon-info {
        color: #337eff;
    }
    .notification-notice-icon-warning {
        color: #ffaf0f;
    }
    .notification-notice-icon-error {
        color: #f24957;
    }

    .notification-notice-close {
        position: absolute;
        right: 22px;
        top: 16px;
        color: #666;
        outline: none;
    }
    a.notification-notice-close:focus {
        text-decoration: none;
    }
    .notification-notice-close:hover {
        color: #3d3d3d;
    }
    .notification-notice-btn {
        float: right;
        margin-top: 16px;
    }
    .notification .notification-fade-effect {
        animation-duration: 0.24s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .notification-fade-enter,
    .notification-fade-appear {
        opacity: 0;
        animation-duration: 0.24s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-play-state: paused;
    }
    .notification-fade-leave {
        animation-duration: 0.24s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-duration: 0.2s;
        animation-play-state: paused;
    }
    .notification-fade-enter.notification-fade-enter-active,
    .notification-fade-appear.notification-fade-appear-active {
        animation-name: NotificationFadeIn;
        animation-play-state: running;
    }
    .notification-fade-leave.notification-fade-leave-active {
        animation-name: NotificationFadeOut;
        animation-play-state: running;
    }
    @keyframes NotificationFadeIn {
        0% {
            opacity: 0;
            left: 384px;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @keyframes NotificationLeftFadeIn {
        0% {
            opacity: 0;
            right: 384px;
        }
        100% {
            right: 0;
            opacity: 1;
        }
    }
    @keyframes NotificationFadeOut {
        0% {
            opacity: 1;
            margin-bottom: 16px;
            padding-top: 16px 24px;
            padding-bottom: 16px 24px;
            max-height: 150px;
        }
        100% {
            opacity: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
            max-height: 0;
        }
    }
`;

export const Notification = props => {
    const { message, description, duration, onClose, ...other } = props;

    return (
        <NotificationStyle
        // style="right: 0px; top: 24px; bottom: auto;"
        >
            <div className="notification-notice notification-notice-closable">
                <div className="notification-notice-content">
                    <div className="notification-notice-message">
                        Notification Title
                    </div>
                    <div className="notification-notice-description">
                        I will never close automatically. I will be close
                        automatically. I will never close automatically.
                    </div>
                </div>
                <a className="notification-notice-close" onClick={onClose}>
                    <Icon type="OutlineClose" />
                </a>
            </div>
        </NotificationStyle>
    );
};

Notification.defaultProps = {};

export default Notification;
