import React from 'react';
import styled, { css } from 'styled-components';

const StyledIcon: any = styled('i')`
    visibility: ${({ child }: any) => (child ? 'visible' : 'hidden')};
    padding-right: 4px;
`;

const TreeNodeStyle = styled.div`
    ${({ theme, selected }) => css`
        .tree-node-title {
            display: flex;
            align-items: center;
            padding: 0 12px;
            border-radius: 4px;
            line-height: 44px;
            height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            ${selected &&
            css`
                background: rgba(0, 188, 112, 0.1);
                color: #00bc70;
            `}
        }

        .tree-node-content {
            flex: auto;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    `}
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
        <TreeNodeStyle selected={selected}>
            <div className="tree-node-title">
                <StyledIcon
                    type="caret-down"
                    rotate={expanded ? 0 : -90}
                    child={children}
                    onClick={onExpand}
                />
                <div
                    className="tree-node-content"
                    onClick={() => onSelect({ title, ...other })}
                >
                    {title}
                </div>
                <span style={{ flex: 'auto' }} />
                {extra}
            </div>
            {expanded ? <div>{children}</div> : null}
        </TreeNodeStyle>
    );
};
