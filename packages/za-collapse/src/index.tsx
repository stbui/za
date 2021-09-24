import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Panel from './panel';

export interface CollapseProps {
    accordion?: boolean;
    activeKey?: string | string[];
    bordered?: boolean;
    showArrow?: boolean;
    onChange?: (activeKey: string[]) => void;
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

function toArray(activeKey: CollapseProps['activeKey']) {
    let currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
        currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
    }
    return currentActiveKey;
}

export const Collapse = props => {
    const {
        prefixCls,
        className,
        defaultActiveKey,
        activeKey: propsActiveKey,
        statusList,
        isScrollToHeader,
        accordion,
        showClose,
        bordered,
        onChange,
        close,
        children,
    } = props;
    const [activeKey, setActiveKey] = useState(toArray(propsActiveKey));

    const onClickItem = (key: string) => {
        let keys = activeKey;
        if (accordion) {
            keys = keys[0] === key ? [] : [key];
        } else {
            keys = [...keys];
            const index = keys.indexOf(key);
            const isActive = index > -1;
            if (isActive) {
                keys.splice(index, 1);
            } else {
                keys.push(key);
            }
        }
        setActiveKey(keys);
    };

    const onCloseItem = (key: string) => {};

    useMemo(() => {
        if (propsActiveKey !== activeKey) {
            setActiveKey(toArray(propsActiveKey));
        }
    }, [propsActiveKey]);
    useMemo(() => {
        if (propsActiveKey !== activeKey) {
            onChange && onChange(activeKey);
        }
    }, [activeKey, propsActiveKey]);

    return (
        <CollapseStyle>
            {React.Children.map(children, (child, index) => {
                const key = child.key || String(index);
                const { disabled } = child.props;

                let isActive = false;
                if (accordion) {
                    // 手风琴模式下默认选择第一个
                    isActive = activeKey[0] === key;
                } else {
                    isActive = activeKey.indexOf(key) > -1;
                }

                const header = child.props.header;

                const props = {
                    header,
                    showClose,
                    isActive,
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
    accordion: false,
    showClose: false,
    bordered: true,
};

Collapse.Panel = Panel;

export default Collapse;
