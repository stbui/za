import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';

const PaginationStyle = styled.ul`
    font-size: 12px;
    user-select: none;
    padding: 0;

    .pagination-item {
        cursor: pointer;
        color: #666;
        font-size: 10px;
        border-radius: 6px;
        list-style: none;
        min-width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
    }
`;

export const Pagination = props => {
    const { ...other } = props;

    return (
        <PaginationStyle {...other}>
            <li className="pagination-item">pre</li>
            <li className="pagination-item">1</li>
            <li className="pagination-item">2</li>
            <li className="pagination-item">3</li>
            <li className="pagination-item">next</li>
        </PaginationStyle>
    );
};

Pagination.defaultProps = { theme: themes.default };

export default Pagination;
