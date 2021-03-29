import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface MenuProps {
    active?: boolean;
    disabled?: boolean;
    checked?: boolean;
    prefix?: any;
    suffix?: any;
    icon?: any;
    theme?: any;
}

export const MenuItemActive = css`
    background-color: #e5f5ff;
    color: #009dff;
`;
export const MenuItemDisabled = css`
    color: #abb4ba;
    cursor: not-allowed;
`;
export const MenuItemChecked = css``;

const MenuItemRoot = styled.div<MenuProps>`
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--rb-font-sans);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: rgb(57, 65, 70);
    padding: 0.25rem 1.75rem;
    transition: 150ms fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;

    ${props =>
        props.disabled
            ? MenuItemDisabled
            : css`
                  &:hover {
                      ${MenuItemActive}
                  }
              `}

    ${props => props.active && MenuItemActive}
`;

const MenuItemPrefix = styled.span`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
`;
const MenuItemSuffix = styled.span`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
`;
const MenuItemLabel = styled.span`
    flex: 1 1 auto;
`;
const MenuItemCheck = styled.span`
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
`;

export const MenuItem: FC<MenuProps> = props => {
    const {
        icon,
        prefix,
        suffix,
        children,
        checked,
        active,
        disabled,
        ...other
    } = props;

    return (
        <MenuItemRoot active={active} disabled={disabled} {...other}>
            <MenuItemCheck>{icon}</MenuItemCheck>

            <MenuItemPrefix>{prefix}</MenuItemPrefix>

            <MenuItemLabel>{children}</MenuItemLabel>

            <MenuItemSuffix>{suffix}</MenuItemSuffix>
        </MenuItemRoot>
    );
};

MenuItem.defaultProps = {
    theme: {
        menu: {
            bg: '#e5f5ff',
            color: '#009dff',
        },
    },
};

export default MenuItem;
