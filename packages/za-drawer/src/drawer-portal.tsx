import React from 'react';
import { createPortal } from 'react-dom';
// import { usePortal } from '@stbui/za-portal';
import { useProtal } from '@stbui/za-overlay';

import DrawerContent from './drawer-content';

export const DrawerPortal = props => {
    const { Protal, isShow, onClose, onShow } = useProtal();

    return (
        <Protal>
            <DrawerContent
                onShow={onShow}
                onClose={onClose}
                {...props}
            ></DrawerContent>
        </Protal>
    );
};

export default DrawerPortal;
