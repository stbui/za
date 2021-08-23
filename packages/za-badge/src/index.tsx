import React from 'react';
import styled from 'styled-components';

export interface BadgeProps {
    /** Number to show in badge */
    count?: number | string | null;
    showZero?: boolean;
    /** Max count to show */
    overflowCount?: number;
    overflowType?: 'plus' | 'ellipsis';
    /** whether to show red dot without number */
    dot?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    scrollNumberPrefixCls?: string;
    className?: string;
    status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    text?: string;
    offset?: [number | string, number | string];
    title?: string;
}

const BadgeStyle = styled.span`
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
    position: relative;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;

    .badge-count {
        position: absolute;
        transform: translateX(-50%);
        top: -10px;
        height: 20px;
        border-radius: 10px;
        min-width: 20px;
        background: #f24957;
        color: #fff;
        line-height: 20px;
        text-align: center;
        padding: 0 6px;
        font-size: 12px;
        font-weight: normal;
        white-space: nowrap;
        transform-origin: -10% center;
        box-shadow: 0 0 0 1px #fff;
    }
`;

export const Badge: React.FC<BadgeProps> = props => {
    const {
        children,
        count,
        overflowCount,
        overflowType,
        dot,
        status,
        showZero,
        offset,
        style,
        ...other
    } = props;

    let displayCount =
        (count as number) > (overflowCount as number)
            ? overflowType === 'plus'
                ? `${overflowCount}+`
                : '...'
            : count;

    const isZero = displayCount === '0' || displayCount === 0;

    const isDot = (dot && !isZero) || status;

    if (isDot) {
        displayCount = '';
    }

    const isEmpty =
        displayCount === null ||
        displayCount === undefined ||
        displayCount === '';

    const hidden = (isEmpty || (isZero && !showZero)) && !isDot;

    const styleWithOffset = offset
        ? {
              marginLeft: offset[0],
              marginTop: offset[1],
              ...style,
          }
        : style;

    return (
        <BadgeStyle {...props}>
            {children}
            <sup className="badge-scroll-number badge-count">
                <span className="badge-scroll-number-only">
                    <span>0</span>
                </span>
            </sup>
        </BadgeStyle>
    );
};

Badge.defaultProps = {
    scrollNumberPrefixCls: 'scroll-number',
    count: null,
    showZero: false,
    dot: false,
    overflowCount: 99,
    overflowType: 'plus',
};

export default Badge;
