import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';
import BreadcrumbItem from './item';

const BreadcrumbStyle = styled.nav`
    position: relative;

    .breadcrumb {
        display: block;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        height: 16px;
        line-height: 16px;
    }
`;

export const Breadcrumb = props => {
    const { children, ...other } = props;

    return <BreadcrumbStyle {...other}>{children}</BreadcrumbStyle>;
};

Breadcrumb.defaultProps = { theme: themes.default };

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
