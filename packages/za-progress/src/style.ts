import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

export interface ProgressStyle {}

const active = css`
    @keyframes progress-active {
        0% {
            opacity: 0.1;
            width: 0;
        }

        20% {
            opacity: 0.5;
            width: 0;
        }

        100% {
            opacity: 0;
            width: 100%;
        }
    }

    .progress-bg:before {
        content: '';
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        border-radius: 10px;
        animation: progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }
`;

const exception = css`
    .progress-bg {
        background-color: #f24957;
    }
`;
const success = css`
    .progress-bg {
        background-color: #26bd71;
    }
`;

const statusMap = {
    active,
    exception,
};

export const ProgressStyle = styled.div<ProgressStyle>`
    ${({ theme, width, status }) => css`
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
        position: relative;
        display: inline-block;

        /* line */
        position: relative;
        width: 100%;
        font-size: 14px;

        .progress-line-ctner {
            display: inline-flex;
            width: 100%;
        }

        .progress-basic {
            flex: 1;
        }

        .progress-outer {
            box-sizing: border-box;
            display: inline-block;
            width: 100%;
            margin-right: 0;
            padding-right: 0;

            /*  */
            padding-right: calc(2em + 8px);
            margin-right: calc(-2em - 8px);
        }

        .progress-inner {
            display: inline-block;
            width: 100%;
            background-color: #f2f3f5;
            border-radius: 100px;
            vertical-align: middle;
            position: relative;
        }

        .progress-bg {
            background-color: #337eff;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
            position: relative;

            width: ${width}%;
            height: 8px;
            border-radius: 100px;

            &:before {
                content: '';
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #fff;
                border-radius: 10px;
                animation: progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1)
                    infinite;
            }
        }

        .progress-text {
            word-break: normal;
            width: 2em;
            text-align: left;
            font-size: 1em;
            margin-left: 8px;
            vertical-align: middle;
            display: inline-block;
            color: #666;
            line-height: 1;
        }

        .progress-container {
            overflow: hidden;
            border-radius: 0.25rem;

            height: 1.375rem;

            background-color: rgb(237, 241, 247);
        }

        .progress-value {
            height: 100%;
            width: 20%;
            text-align: center;
            overflow: hidden;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
            transition-duration: 400ms;
            transition-property: width, background-color;

            font-size: 0.9375rem;
            font-weight: 600;
            line-height: 1.5rem;

            background-color: rgb(0, 149, 255);
            color: rgb(255, 255, 255);
        }

        ${statusMap[status]}
    `}
`;
