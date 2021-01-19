import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

export interface PaginationStyleProps {
    active?: number;
}

export const PaginationStyle = styled.ul<PaginationStyleProps>`
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
