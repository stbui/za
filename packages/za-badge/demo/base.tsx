/**
 * desc: 简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。
 */
import React from 'react';
import Badge from '@stbui/za-badge';
import styled from 'styled-components';

const Rect = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
`;

export default () => (
    <div>
        <Badge count={5}>
            <Rect />
        </Badge>
        <Badge count={0} showZero>
            <a href="#" className="head-example" />
        </Badge>
    </div>
);
