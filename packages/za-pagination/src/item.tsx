import React from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@stbui/za-theme';

export interface PaginationItemProps {
    active?: boolean;
    disabled?: boolean;
    onClick?: any;
}

export const PaginationItemStyle = styled.li<PaginationItemProps>`
    cursor: pointer;
    user-select: none;

    list-style: none;
    border: 1px solid #e1e3e6;
    background-color: #fff;
    margin-right: 8px;
    font-family: Arial;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 28px;
    height: 28px;

    &:hover {
        border-color: #337eff;
        color: #337eff;
    }

    ${({ active }) =>
        active &&
        css`
            border-color: #337eff;
            color: #337eff;
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            color: #999;
            border-color: #e1e3e6;
            cursor: not-allowed;

            &:hover {
                cursor: default;
                color: #999;
                border-color: #e1e3e6;
                cursor: not-allowed;
            }
        `}
`;

PaginationItemStyle.defaultProps = {
    theme: defaultTheme,
};

export const PaginationItem: React.FC<PaginationItemProps> = props => {
    const { active, children, disabled, onClick } = props;

    const onLiClick = (event: React.MouseEvent) => {
        if (disabled) return;

        onClick && onClick(event);
    };

    return (
        <PaginationItemStyle
            onClick={onLiClick}
            active={active}
            disabled={disabled}
        >
            {children}
        </PaginationItemStyle>
    );
};

export default PaginationItem;
