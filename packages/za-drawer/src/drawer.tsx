import React, { useEffect, useRef } from 'react';
import useClickAway from '@stbui/za-use-click-away';

import DrawerPortal from './drawer-portal';

export const Drawer = props => {
    const { visible, width } = props;
    const ref = useRef();

    useEffect(() => {
        console.log(ref);
    }, [ref?.current]);

    return (
        <DrawerPortal ref={ref} visible={visible} width={width}></DrawerPortal>
    );
};

export default Drawer;
