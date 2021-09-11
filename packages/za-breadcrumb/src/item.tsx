import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';

const BreadcrumbItemStyle = styled.li`
    display: inline-block;

    .breadcrumb-text {
        height: 16px;
        min-width: 16px;
        line-height: 16px;

        color: #585d66;

        display: inline-block;
        text-decoration: none;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all 0.1s linear;
    }

    .breadcrumb-separator {
        height: 16px;
        margin: 0 8px;
        font-size: 16px;
        line-height: 16px;

        color: #c4c7cc;
        display: inline-block;
        vertical-align: top;
    }
`;

export const BreadcrumbItem = props => {
    const { children, ...other } = props;

    return (
        <BreadcrumbItemStyle {...other}>
            <a href="javascript:void(0);" className="breadcrumb-text">
                {children}
            </a>
            <span className="breadcrumb-separator">
                <i className="icon icon-arrow-right medium breadcrumb-icon-sep"></i>
            </span>
        </BreadcrumbItemStyle>
    );
};

BreadcrumbItem.defaultProps = {
    theme: themes.default,
};

export default BreadcrumbItem;
