import React, { useEffect, useState } from 'react';
import Icon from '@stbui/za-icon';
import PaginationPrevious from './previous';
import PaginationNext from './next';
import PaginationPages from './pages';
import styled from 'styled-components';

export const PaginationStyle = styled.ul`
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

    display: flex;
    align-items: center;
`;

export const Pagination = props => {
    const { defaultCurrent, current, total, limit, onChange, itemRender } =
        props;

    const [page, setPage] = useState(current || defaultCurrent);

    const update = type => {
        let newPage = page;
        if (type === 'prev' && page > 1) {
            newPage = page - 1;
        }

        if (type === 'next' && page < total) {
            newPage = page + 1;
        }
        setPage(newPage);
        onChange && onChange(newPage);
    };

    useEffect(() => {
        if (current !== undefined) {
            setPage(current);
        }
    }, [current]);

    return (
        <PaginationStyle>
            <PaginationPrevious
                disabled={page <= 1}
                onClick={() => update('prev')}
            >
                <Icon type="OutlineLeft" />
            </PaginationPrevious>

            <PaginationPages
                count={total}
                current={page}
                limit={limit}
                setPage={setPage}
            />
            <PaginationNext
                disabled={page >= total}
                onClick={() => update('next')}
            >
                <Icon type="OutlineRight" />
            </PaginationNext>
        </PaginationStyle>
    );
};

Pagination.defaultProps = {
    defaultCurrent: 1,
    total: 1,
    limit: 7,
};

export default Pagination;
