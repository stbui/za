import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
    background-color: rgb(37, 37, 38);
    outline-color: rgba(83, 89, 93, 0.5);
`;

const Composite = styled.div`
    display: none;
    height: 35px;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
`;

const Content = styled.div`
    width: 280px;
    height: 720px;
`;

const TitleLabel = styled.div`
    line-height: 35px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;

    h2 {
        font-size: 11px;
        cursor: default;
        font-weight: 400;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        text-transform: uppercase;

        color: rgb(187, 187, 187);
    }
`;

export const Activitybar = props => {
    const { title, content, footer, ...other } = props;

    return (
        <Root {...other}>
            <Composite>
                <TitleLabel>
                    <h2 draggable="true" title="搜索 (⇧⌘F)">
                        搜索
                    </h2>
                </TitleLabel>
            </Composite>
            <Content></Content>
        </Root>
    );
};

Activitybar.defaultProps = {};

export default Activitybar;
