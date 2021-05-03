import React from 'react';
import styled from 'styled-components';

export const StatusbarRoot = styled.footer`
    box-sizing: border-box;
    cursor: default;
    width: 100%;
    height: 22px;
    font-size: 12px;
    display: flex;
    overflow: visible;

    background-color: rgb(0, 122, 204);
    color: rgb(255, 255, 255);
    width: 765px;
    height: 22px;
`;

export const StatusbarLeft = styled.div`
    flex-grow: 1;
    display: flex;
`;

export const StatusbarRight = styled.div`
    flex-direction: row-reverse;
    flex-wrap: wrap;
`;

export const StatusbarItem = styled.div`
    display: inline-block;
    line-height: 22px;
    height: 100%;
    vertical-align: top;
    max-width: 40vw;

    &:first-child {
        margin-right: 3px;
        margin-left: 3px;
    }
`;

const A = styled.a`
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0 5px;
    white-space: pre;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    outline-width: 0;

    &:hover:not(.disabled) {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.12);
    }
`;

export const Statusbar = props => {
    const { title, content, footer, ...other } = props;

    return (
        <StatusbarRoot {...other}>
            <StatusbarLeft>
                <StatusbarItem>
                    <A>main</A>
                </StatusbarItem>
            </StatusbarLeft>
            <StatusbarRight>
                <StatusbarItem>
                    <A>行 42，列 54 (已选择16)</A>
                </StatusbarItem>
                <StatusbarItem>
                    <A>CSS</A>
                </StatusbarItem>
                <StatusbarItem>
                    <A>LF</A>
                </StatusbarItem>
                <StatusbarItem>
                    <A>UTF-8</A>
                </StatusbarItem>
                <StatusbarItem>
                    <A>制表符长度: 4</A>
                </StatusbarItem>
            </StatusbarRight>
        </StatusbarRoot>
    );
};

Statusbar.defaultProps = {};

export default Statusbar;
