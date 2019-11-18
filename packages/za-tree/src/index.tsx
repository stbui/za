import React, { useState } from 'react';
import styled from 'styled-components';

const Ellipsis = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StyledIcon: any = styled('i')`
    visibility: ${({ child }: any) => (child ? 'visible' : 'hidden')};
    padding-right: 4px;
`;

const StyledTreeNodeTitle: any = styled(Ellipsis)`
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 4px;
    line-height: 44px;
    height: 44px;

    ${({ selected }: any) =>
        selected &&
        ` background: rgba(0, 188, 112, 0.1);
    color: #00bc70;`}
`;

const StyledTreeNodeContent = styled(Ellipsis)`
    flex: auto;
    cursor: pointer;
`;

export const TreeNode = props => {
    const {
        children,
        title,
        extra,
        selected,
        expanded,
        onSelect,
        onExpand,
        ...other
    } = props;

    return (
        <div>
            <StyledTreeNodeTitle selected={selected}>
                <StyledIcon
                    type="caret-down"
                    rotate={expanded ? 0 : -90}
                    child={children}
                    onClick={onExpand}
                />
                <StyledTreeNodeContent
                    onClick={() => onSelect({ title, ...other })}
                >
                    {title}
                </StyledTreeNodeContent>
                <span style={{ flex: 'auto' }} />
                {extra}
            </StyledTreeNodeTitle>
            {expanded ? <div>{children}</div> : null}
        </div>
    );
};

export const Tree = ({
    children,
    dataSource,
    onSelect,
    defaultSelectKeys = ['0'],
}) => {
    const [expandKeys, setExpand] = useState([]);
    const [selectKeys, setSelectKeys] = useState(defaultSelectKeys);

    const onExpand = (key: any) => {
        // const index = expandKeys.indexOf(key);
        // if (index === -1) {
        //   setExpand((prevState) => [...prevState, key]);
        // } else if (index > -1) {
        //   const keys = [...expandKeys];

        //   setExpand(keys.splice(index, 1));
        // } else {
        //   setExpand([key]);
        // }
        // @ts-ignore
        const index = expandKeys.indexOf(key);

        if (index === -1) {
            // @ts-ignore
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
            // @ts-ignore
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

                // @ts-ignore
                if (child.props.children) {
                    // @ts-ignore
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

export default Tree;
