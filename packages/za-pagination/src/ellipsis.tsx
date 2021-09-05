import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export interface PaginationEllipsisProps {
    onClick?: any;
    isBefore?: boolean;
}

export const PaginationEllipsisStyle = styled.li<PaginationEllipsisProps>`
    margin-right: 8px;
    min-width: 28px;
    height: 28px;
    cursor: pointer;
    user-select: none;

    ${({ isBefore }) => css`
        .more {
            transform: rotate(${isBefore ? '180deg' : '0deg'});
        }
    `}
`;

export const PaginationEllipsis: React.FC<PaginationEllipsisProps> = props => {
    const { onClick, isBefore } = props;
    const [showMore, setShowMore] = useState(false);

    return (
        <PaginationEllipsisStyle
            isBefore={isBefore}
            onClick={onClick}
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
        >
            {showMore ? (
                <svg
                    className="more"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                >
                    <path d="M13 17l5-5-5-5" />
                    <path d="M6 17l5-5-5-5" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
                    <circle cx="5" cy="12" r="1" fill="currentColor" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <circle cx="19" cy="12" r="1" fill="currentColor" />
                </svg>
            )}
        </PaginationEllipsisStyle>
    );
};

export default PaginationEllipsis;
