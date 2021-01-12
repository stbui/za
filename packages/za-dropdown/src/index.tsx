import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export interface DropDownProps {
    trigger?: ('click' | 'hover' | 'contextMenu')[];
    overlay: React.ReactNode;
    onVisibleChange?: (visible?: boolean) => void;
    visible?: boolean;
    disabled?: boolean;
    align?: Object;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    prefixCls?: string;
    className?: string;
    transitionName?: string;
    placement?:
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight';
    forceRender?: boolean;
}

export const Dropdown = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Dropdown.defaultProps = {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft',
};

export default Dropdown;
