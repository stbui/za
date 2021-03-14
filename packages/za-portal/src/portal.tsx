import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '@stbui/za-portal';

export const Portal = ({ id, children, ...props }) => {
    const el = usePortal(id);

    if (!el) return null;

    return createPortal(React.cloneElement(children, props), el);
};

export default Portal;
