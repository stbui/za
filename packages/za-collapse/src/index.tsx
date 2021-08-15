import React, { useState } from 'react';
import styled from 'styled-components';
import Panel from './panel';

export interface CollapseProps {
    defaultActiveKey?: string | string[];
    activeKey?: string | string[];
    statusList?: any[];

    isScrollToHeader?: boolean;
    accordion?: boolean;
    showClose?: boolean;
    bordered?: boolean;

    onChange?: (value: string) => void;
    close?: (statusList: any[]) => void;
}

const CollapseStyle = styled.div`
    height: 100%;
    border: 1px solid #e1e3e6;
    border-radius: 2px;
    border-bottom: 0;
    background-color: #f7f8fa;

    .collapse-borderless {
        background-color: #fff;
        border: 0;
    }
    .collapse-borderless .collapse-item .collapse-content-box {
        background-color: transparent;
        border-top: 0;
    }
`;

export const Collapse = props => {
    const {
        prefixCls,
        className,
        defaultActiveKey,
        activeKey,
        statusList,
        isScrollToHeader,
        accordion,
        showClose,
        bordered,
        onChange,
        close,
        children,
    } = props;
    const [currentActiveKey, setCurrentActiveKey] = useState(defaultActiveKey);

    const onClickItem = (key: string) => {};
    const onCloseItem = (key: string) => {};

    return (
        <CollapseStyle>
            {React.Children.map(children, (child, index) => {
                const key = child.key || String(index);
                // const isActive = accordion
                //     ? activeKey[0] === key
                //     : activeKey.indexOf(key) > -1;

                const header = child.props.header;

                const props = {
                    header,
                    showClose,
                    // isActive,
                    prefixCls,
                    children: child.props.children,
                    onItemClick: onClickItem(key),
                    onCloseItem: onCloseItem(key),
                };

                return React.cloneElement(
                    child as React.ReactElement<any>,
                    props
                );
            })}
        </CollapseStyle>
    );
};

Collapse.defaultProps = {
    isScrollToHeader: false,
    accordion: false,
    showClose: false,
    bordered: true,
};

Collapse.Panel = Panel;

export default Collapse;
