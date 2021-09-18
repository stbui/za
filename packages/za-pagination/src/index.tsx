import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

interface PaginationStyleProps {
    active?: number;
}
export interface PaginationProps {
    current?: number;
    defaultCurrent?: number;
    defaultPageSize?: number;
    hideOnSinglePage?: boolean;
    pageSize?: number;
    total?: number;
    pageSizeOptions?: string[];
    showLessItems?: boolean;
    showPrevNextJumpers?: boolean;
    showQuickJumper?: boolean;
    showSizeChanger?: boolean;
    simple?: boolean;
    showTotal?: (total, range) => void;
    itemRender?: (page, type, originalElement) => React.ReactNode;
    onChange?: (page, pageSize) => void;
    onShowSizeChange?: (current, size) => void;
}

const PaginationStyle = styled.ul<PaginationStyleProps>`
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

    .pagination-item {
        cursor: pointer;
        user-select: none;
        min-width: 28px;
        height: 28px;
        line-height: 26px;
        text-align: center;
        list-style: none;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #e1e3e6;
        background-color: #fff;
        margin-right: 8px;
        font-family: Arial;
        outline: 0;

        &:hover {
            border-color: #337eff;
            color: #337eff;
        }
    }

    .pagination-prev,
    .pagination-next {
        font-family: Arial;
        cursor: pointer;
        color: #333;
        list-style: none;
        min-width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        transition: all 0.3s;
        display: inline-block;
        vertical-align: middle;

        margin-right: 8px;

        color: #333;
        user-select: none;

        border: 1px solid #e1e3e6;

        transition: all 0.3s;
        &:hover {
            border-color: #337eff;
            color: #337eff;
        }
    }

    .pagination-item-active {
        border-color: #337eff;
        font-weight: 500;
        background: #337eff;
        color: #fff;

        &:hover {
            color: #fff;
        }
    }

    ${({ theme, active }) => css``}
`;

export const Pagination = (props: PaginationProps) => {
    const { defaultCurrent, current, total, ...other } = props;
    const [active, setActive] = useState(-1);

    const items = Array.from(Array(total).keys());

    const onPreClick = () => {
        const p = active - 1;
        setActive(p);
    };

    const onNextClick = () => {
        const p = active + 1;
        setActive(p);
    };

    return (
        <PaginationStyle {...other}>
            <li className="pagination-prev" onClick={onPreClick}>
                pre
            </li>
            {items.map(item => (
                <li
                    className={
                        active === item
                            ? 'pagination-item pagination-item-active'
                            : 'pagination-item'
                    }
                    key={item}
                    onClick={() => setActive(item)}
                >
                    {item + 1}
                </li>
            ))}

            <li className="pagination-next" onClick={onNextClick}>
                next
            </li>
        </PaginationStyle>
    );
};

Pagination.defaultProps = { theme: themes.default };

export default Pagination;
