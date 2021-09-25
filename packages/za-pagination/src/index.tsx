import React, { useState, useEffect, useMemo } from 'react';
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
        current: currentNumber,
        total,
        pageSize,
        onChange,
        ...other
    } = props;
    const [current, setCurrent] = useState(currentNumber);

    useEffect(() => setCurrent(currentNumber), [currentNumber]);

    const initPageSoure = useMemo(() => {
        const data: any[] = [{ type: 'prev', disabled: current === 1 }];
        const count = Math.ceil(total / pageSize);
        const itemCount = count <= 5 ? count : 5;
        let num = 0;
        let basic = 0;
        if (current > 3 && count > 5) {
            data.push({ label: 1 });
        }
        if (current > 4 && count > 6) {
            data.push({ type: 'jumpPrev', label: '•••', goto: 5 });
        }
        while (num < itemCount) {
            num += 1;
            if (current > 3 && count > 5) {
                basic = current - 3;
            }
            let label = num + basic;
            if (count - current === 0 && count > 5) {
                label -= 2;
            }
            if (count - current === 1 && count > 5) {
                label -= 1;
            }
            if (label <= count) {
                data.push({ label, active: current === label });
            }
        }
        if (current + 3 < count && count > 6) {
            data.push({ type: 'jumpNext', label: '•••', goto: 5 });
        }
        if (current + 2 < count && count > 5) {
            data.push({ label: count });
        }
        data.push({ type: 'next', disabled: current === count });
        return data;
        // return [
        //   { type: 'prev', disabled: true },
        //   { type: 'jumpPrev', label: '•••', goto: 5 },
        //   { label: 1 },
        //   { label: 2, active: true },
        //   { label: 3 },
        //   { label: 4 },
        //   { type: 'jumpPrev', label: '•••', goto: 5 },
        //   { type: 'next' },
        // ];
    }, [current, total, pageSize]);

    function handleClick(item: any) {
        if (item.active || item.disabled) {
            return;
        }
        const count = Math.ceil(total / pageSize);
        const state = {} as any;
        if (item.label) {
            state.current = item.label as number;
        }
        if (item.type === 'prev') {
            state.current = current - 1 > 0 ? current - 1 : 1;
        }
        if (item.type === 'next') {
            state.current = current + 1 <= count ? current + 1 : count;
        }
        if (/^(jumpPrev|jumpNext)/.test(item.type as string) && item.goto) {
            state.current =
                item.type === 'jumpPrev'
                    ? current - item.goto
                    : current + item.goto;
            if (state.current > count) {
                state.current = count;
            }
            if (state.current < 1) {
                state.current = 1;
            }
        }

        setCurrent(state.current);
        onChange &&
            onChange(state.current, total as number, pageSize as number);
    }

    return (
        <PaginationStyle {...other}>
            {initPageSoure.map((item, idx) => {
                let label = <a>{item.label}</a>;
                if (/^(prev|next)$/.test(item.type as string)) {
                    label = <a className={`arrow ${item.type}`} />;
                }
                return (
                    <li
                        className={[
                            item.active ? 'active' : null,
                            item.disabled ? 'disabled' : null,
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .trim()}
                        onClick={() => handleClick(item)}
                        key={idx}
                    >
                        {label}
                    </li>
                );
            })}
        </PaginationStyle>
    );
};

Pagination.defaultProps = { theme: themes.default, total: 0, pageSize: 10 };

export default Pagination;
