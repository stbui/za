import React, { useState } from 'react';
import { themes } from '@stbui/za-theme';
import { PaginationStyle } from './style';

export interface PaginationProps {
    current?: number;
    defaultCurrent?: number;
    defaultPageSize?: number;
    hideOnSinglePage?: boolean;
    pageSize?: number;
    /**
     * 总记录数
     */
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

export const Pagination = (props: PaginationProps) => {
    const {
        defaultCurrent,
        defaultPageSize,
        current,
        total,
        pageSize,
        ...other
    } = props;
    const [active, setActive] = useState(-1);
    const [_current, _onChange] = useState(defaultCurrent);
    const [_pageSize, _onPageSizeChange] = useState(defaultPageSize);

    const pageCount = Math.max(1, Math.ceil(total / pageSize));

    const items = Array.from(Array(total).keys());

    const onPreClick = () => {
        const p = active - 1;
        setActive(p);
    };

    const onNextClick = () => {
        const p = active + 1;
        setActive(p);
    };

    const preBtn = () => (
        <li key="prev" className="pagination-prev" onClick={onPreClick}>
            上一页
        </li>
    );

    const nextBtn = () => (
        <li className="pagination-next" onClick={onNextClick}>
            下一页
        </li>
    );

    return (
        <PaginationStyle {...other}>
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
        </PaginationStyle>
    );
};

Pagination.defaultProps = { theme: themes.default, total: 0, pageSize: 10 };

export default Pagination;
