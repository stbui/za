import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '@stbui/za-portal';
import TooltipContent from './tooltip-content';

export const TooltipPortal = props => {
    const el = usePortal('tooltip');

    if (!el) return null;

    return createPortal(<TooltipContent {...props}></TooltipContent>, el);
};

export default TooltipPortal;
