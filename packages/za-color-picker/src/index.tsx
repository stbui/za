import React from 'react';
import styled from 'styled-components';

export interface ColorPickerProps {
    alpha?: number;
    children?: React.ReactNode;
    className?: string;
    // color?: string | ParamsColor | Color;
    colorMap?: string[];
    defaultAlpha?: number;
    defaultColor?: string;
    disabled?: boolean;
    enableAlpha?: boolean;
    enableHistory?: boolean;
    maxHistory?: number;
    mode?: 'RGB' | 'HSL' | 'HSB';
    onChange?: (color: any) => void;
    onVisibleChange?: (visible: boolean) => void;
    prefixCls?: string;
    quickMode?: boolean;
    style?: React.CSSProperties;
    popupStyle?: React.CSSProperties;
    esc?: boolean;
    transitionName?: string;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    align?: string;
    animation?: string;
}

const Root = styled.div``;

export const ColorPicker = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

ColorPicker.defaultProps = {
    children: <span className="za-color-picker-trigger" />,
    colorMap: [
        '#33bbff',
        '#337eff',
        '#8a73ff',
        '#bb67e6',
        '#f290b6',
        '#f24957',
        '#cc613d',
        '#faa702',
        '#ffe500',
        '#aacc00',
        '#26bf40',
        '#3dd9af',
    ],
    defaultAlpha: 100,
    defaultColor: '#33bbff',
    disabled: false,
    enableAlpha: false,
    enableHistory: true,
    maxHistory: 8,
    onChange: () => {},
    onVisibleChange: () => {},
    prefixCls: 'za-color-picker',
    quickMode: false,
    style: {},
    popupStyle: {},
    esc: true,
};

export default ColorPicker;
