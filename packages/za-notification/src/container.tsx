import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '@stbui/za-portal';

export const NotificationContainer = () => {
    const portal = usePortal('toast');

    if (!portal) return null;
    return createPortal(<div>1</div>, portal);
};
