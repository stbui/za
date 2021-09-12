import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
    getPosition,
    TooltipPosition,
    defaultTooltipPosition,
    getIconPosition,
} from './tooltip-placement';
import { getRect } from './helper';

export type TooltipPlacement =
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';

export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'contextMenu';

export interface AbstractTooltipProps {
    prefixCls?: string;
    overlayClassName?: string;
    style?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    placement?: TooltipPlacement;
    builtinPlacements?: Object;
    defaultVisible?: boolean;
    visible?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    transitionName?: string;
    trigger?: TooltipTrigger;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
    autoAdjustOverflow?: any;
    getTooltipContainer?: (triggerNode: HTMLElement) => HTMLElement;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    children?: React.ReactNode;
    stretch?: string;
}

const TooltipStyle = styled.div<any>`
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
    position: absolute;
    z-index: 1060;
    display: block;
    visibility: visible;
    max-width: 250px;

    .tooltip-inner {
        box-sizing: border-box;
        padding: 6px 8px;
        color: #fff;
        text-align: left;
        text-decoration: none;
        background-color: rgba(51, 51, 51, 0.9);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        min-height: 32px;
        white-space: pre-wrap;
    }

    ${({ rect, placement }) => {
        const { transform, top, left, right, bottom } = getIconPosition(
            placement,
            '0',
            '0'
        );

        return css`
            top: ${rect.top};
            left: ${rect.left};
            transform: ${rect.transform};

            .tooltip-arrow {
                width: 0px;
                height: 0px;
                border-style: solid;
                border-width: 6px 7px 6px 0px;
                border-color: transparent rgba(51, 51, 51, 0.9) transparent
                    transparent;
                position: absolute;
                inset: auto auto 3px 50%;

                left: ${left};
                top: ${top};
                right: ${right};
                bottom: ${bottom};
                transform: ${transform};
            }
        `;
    }}
`;

export const TooltipContent = props => {
    const { title, placement, parent, offset } = props;
    const [rect, setRect] = useState<TooltipPosition>(defaultTooltipPosition);

    const updateRect = () => {
        const position = getPosition(placement, getRect(parent), offset);
        setRect(position);
    };

    useEffect(() => {
        updateRect();
    }, []);

    return (
        <TooltipStyle {...props} rect={rect}>
            <div className="tooltip-content">
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">
                    <span>{title}</span>
                </div>
            </div>
        </TooltipStyle>
    );
};

TooltipContent.defaultProps = {};

export default TooltipContent;
