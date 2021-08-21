import React from 'react';
import styled from 'styled-components';
import Item from './item';

export interface TimelineProps {
    prefixCls?: string;
    className?: string;
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending?: React.ReactNode;
    pendingDot?: React.ReactNode;
    style?: React.CSSProperties;
    reverse?: boolean;
    mode?: 'left' | 'alternate' | 'right';
}

const TimelineStyle = styled.div`
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Timeline: React.FC<TimelineProps> = props => {
    const {
        children,
        pending = null,
        pendingDot,
        className,
        reverse,
        mode,
        ...rest
    } = props;

    return <TimelineStyle>{children}</TimelineStyle>;
};

Timeline.defaultProps = { reverse: false };

Timeline.Item = Item;

export default Timeline;
