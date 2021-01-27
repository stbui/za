import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export interface TagFilterProps {
    /**
     * 数据源
     */
    dataSource?: string[];
    /**
     * 尺寸
     */
    size?: any;
    /**
     * 布局属性
     */
    layoutProps?: any;
    className?: string;
}

export const TagFilter = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

TagFilter.defaultProps = {};

export default TagFilter;
