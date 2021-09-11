import React from 'react';
import styled from 'styled-components';

const BadgeStyle = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;

    .next-badge-count {
        color: #fff;
        background: #f52743;
        text-align: center;
        white-space: nowrap;
        border-radius: 8px;
        position: absolute;
        width: auto;
        height: 16px;
        min-width: 16px;
        padding: 0 4px;
        font-size: 12px;
        line-height: 16px;
        transform: translateX(-50%);
        top: -0.5em;
    }
`;

export const Badge = props => {
    const { ...other } = props;

    return (
        <BadgeStyle>
            <a href="#" className="basic-example"></a>
            <sup className="badge-scroll-number badge-count">
                <span className="badge-scroll-number-only">
                    <span>0</span>
                </span>
            </sup>
        </BadgeStyle>
    );
};

Badge.defaultProps = {};

export default Badge;
