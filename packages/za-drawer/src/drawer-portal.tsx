import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '@stbui/za-portal';
import DrawerContent from './drawer-content';

export const DrawerPortal = props => {
    const el = usePortal('drawer');

    if (!el) return null;

    return createPortal(<DrawerContent {...props}></DrawerContent>, el);
};

export default DrawerPortal;
