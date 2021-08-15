import React from 'react';
import styled from 'styled-components';

export interface SliderProps {
    prefixCls?: string;
    tooltipPrefixCls?: string;
    range?: boolean;
    min?: number;
    max?: number;
    step?: number | null;
    marks?: any;
    dots?: boolean;
    value?: any;
    defaultValue?: any;
    included?: boolean;
    disabled?: boolean;
    vertical?: boolean;
    onChange?: (value: any) => void;
    onAfterChange?: (value: any) => void;
    tipFormatter?: null | ((value: number) => React.ReactNode);
    tipMode?: 'all' | 'default';
    handle?: React.ReactNode;
    className?: string;
    id?: string;
}

const SliderStyle = styled.div`
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    margin: 14px 6px 10px;
    padding: 4px 0;
    height: 12px;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    & * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .slider-with-marks {
        margin-bottom: 28px;
    }
    .slider-rail {
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: #f2f3f5;
        transition: background-color 0.3s;
    }
    .slider-track {
        position: absolute;
        height: 4px;
        border-radius: 4px;
        background-color: rgba(51, 126, 255, 0.8);
        transition: background-color 0.3s ease;

        /*  */
        left: 0%;
        width: 30%;
    }
    .slider-handle {
        position: absolute;
        margin-left: -7px;
        margin-top: -5px;
        width: 14px;
        height: 14px;
        cursor: pointer;
        cursor: grab;
        border-radius: 50%;
        border: solid 2px rgba(51, 126, 255, 0.8);
        background-color: #fff;
        transition: border-color 0.3s,
            transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        touch-action: pan-x;

        /*  */
        left: 30%;
    }
    .slider-handle-custom {
        border-radius: initial;
        border-width: 0;
        outline: 0;
        width: initial;
        height: initial;
        box-shadow: unset;
    }
    .slider-handle:not(.slider-handle-custom):focus {
        border-color: #337eff;
        box-shadow: 0 0 0 2px rgba(51, 126, 255, 0.3);
        outline: none;
    }
    .slider-handle-click-focused:focus {
        border-color: #99bfff;
        box-shadow: unset;
    }
    .slider-handle.tooltip-open {
        border-color: #337eff;
    }
    .slider:hover .slider-rail {
        background-color: #e1e3e6;
    }
    .slider:hover .slider-track {
        background-color: #337eff;
    }
    .slider:hover .slider-handle:not(.tooltip-open) {
        border-color: #337eff;
    }
    .slider-mark {
        position: absolute;
        top: 14px;
        left: 0;
        width: 100%;
        font-size: 14px;
    }
    .slider-mark-text {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        color: #999;
    }
    .slider-mark-text-active {
        color: #666;
    }
    .slider-step {
        position: absolute;
        width: 100%;
        height: 4px;
        background: transparent;
    }
    .slider-dot {
        position: absolute;
        bottom: -2px;
        margin-left: -4px;
        width: 8px;
        height: 8px;
        border: 2px solid #e9e9e9;
        background-color: #fff;
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
    }
    .slider-dot:first-child {
        margin-left: -4px;
    }
    .slider-dot:last-child {
        margin-left: -4px;
    }
    .slider-dot-active {
        border-color: rgba(51, 126, 255, 0.8);
    }
    .slider-disabled {
        cursor: not-allowed;
    }
    .slider-disabled .slider-track {
        background-color: #999 !important;
    }
    .slider-disabled .slider-handle,
    .slider-disabled .slider-dot {
        border-color: #999 !important;
        background-color: #fff;
        cursor: not-allowed;
        box-shadow: none;
    }
    .slider-disabled .slider-mark-text,
    .slider-disabled .slider-dot {
        cursor: not-allowed !important;
    }
    .slider-vertical {
        width: 12px;
        height: 100%;
        margin: 6px 10px;
        padding: 0 4px;
    }
    .slider-vertical .slider-rail {
        height: 100%;
        width: 4px;
    }
    .slider-vertical .slider-track {
        width: 4px;
    }
    .slider-vertical .slider-handle {
        margin-left: -5px;
        margin-bottom: -7px;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
    }
    .slider-vertical .slider-mark {
        top: 0;
        left: 12px;
        width: 18px;
        height: 100%;
    }
    .slider-vertical .slider-mark-text {
        left: 4px;
        white-space: nowrap;
    }
    .slider-vertical .slider-step {
        width: 4px;
        height: 100%;
    }
    .slider-vertical .slider-dot {
        top: auto;
        left: 2px;
        margin-bottom: -4px;
    }
    .slider-vertical .slider-dot:first-child {
        margin-bottom: -4px;
    }
    .slider-vertical .slider-dot:last-child {
        margin-bottom: -4px;
    }
`;

export const Slider = props => {
    const { ...other } = props;

    const onTouchStart = event => {};
    const onMouseDown = () => {};
    const onMouseUp = () => {};
    const onKeyDown = () => {};
    const onFocus = () => {};
    const onBlur = () => {};

    return (
        <SliderStyle
            {...props}
            onTouchStart={onTouchStart}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            <div className="slider-rail"></div>
            <div
                className="slider-track"
                // style="left: 0%; width: 30%;"
            ></div>
            <div className="slider-step"></div>
            <div
                className="slider-handle"

                // style="left: 30%;"
w            ></div>
            <div className="slider-mark"></div>
        </SliderStyle>
    );
};

Slider.defaultProps = {};

export default Slider;
