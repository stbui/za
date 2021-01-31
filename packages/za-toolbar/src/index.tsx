import styled, { css } from 'styled-components';

export interface ToolbarProps {
    /** 主操作列表（左侧） */
    leftActions?: any[];

    // /** 主操作按钮类型 */
    // leftActionShape: T.string,
    //
    // /** 主按钮默认类型 */
    // leftActionType: T.string,

    /** 次操作列表（左侧） */
    rightActions?: any[];

    /**
     * 点击按钮时的回调
     * @param {string} key 按钮对应的 key
     */
    onActionClick?(key: string): void;

    /**
     * 右侧节点（如果 rightNode 存在，则忽略 rightActions）
     */
    rightNode?: React.ReactNode;
    /**
     * 提示节点
     */
    tipNode?: React.ReactNode;

    /**
     * 搜索节点
     */
    searchNode?: React.ReactNode;

    className?: string;
    style?: React.CSSProperties;
}

const ToolbarStyle = styled.div<ToolbarProps>`
    ${({ theme }) => css`
        display: flex;
        position: relative;
        align-items: center;

        &.toolbar-regular {
            min-height: 56px;
        }

        &.toolbar-dense {
        }
    `}
`;

ToolbarStyle.defaultProps = {};

export default ToolbarStyle;
