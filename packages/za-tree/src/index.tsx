import React, { useState } from 'react';
import { TreeNode } from './node';

export interface TreeProps {
    dataSource?: any[];
    onSelect?: (key, node) => void;
    defaultSelectKeys?: any;
}

export const Tree = ({
    children,
    dataSource,
    onSelect,
    defaultSelectKeys = ['0'],
}) => {
    const [expandKeys, setExpand] = useState([]);
    const [selectKeys, setSelectKeys] = useState(defaultSelectKeys);

    const onExpand = (key: any) => {
        const index = expandKeys.indexOf(key);

        if (index === -1) {
            setExpand([key]);
        } else if (index > -1) {
            setExpand([]);
        }
    };

    const onNodeSelect = (key, node) => {
        setSelectKeys([key]);
        onSelect && onSelect(key, node);
    };

    const getNodeProps = key => {
        return {
            expanded: expandKeys.indexOf(key) > -1,
            selected: selectKeys.indexOf(key) > -1,
            onExpand: () => onExpand(key),
            onSelect: node => onNodeSelect(key, node),
        };
    };

    const renderByChidren = () => {
        const loop = (children, prefix = '0') => {
            return React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return;
                }

                const pos = `${prefix}-${index}`;
                const key = child.key || pos;

                const props = getNodeProps(`${key}`);

                if (child.props.children) {
                    props.children = loop(child.props.children, pos);
                }

                const node = React.cloneElement(child, props);

                return node;
            });
        };

        return loop(children);
    };

    const renderByDataSource = () => {
        const loop = (data, prefix = '0') => {
            return data.map((item, index) => {
                const pos = `${prefix}-${index}`;
                const { key = pos, children, ...others } = item;

                const props = {
                    ...others,
                    ...getNodeProps(`${key}`),
                    _key: key,
                };

                if (children && children.length) {
                    props.children = loop(children, pos);
                }

                const node = (
                    <TreeNode key={key} size={data.length} {...props} />
                );
                return node;
            });
        };

        return loop(dataSource);
    };

    return <div>{dataSource ? renderByDataSource() : renderByChidren()}</div>;
};

Tree.defaultProps = {};

export { TreeNode };

export default Tree;
