import React, { useState } from 'react';
import { Notification } from './Notification';
import { useToast } from './useToast';

export const NotificationContainer = () => {
    const { toasts, dispatch } = useToast();

    return (
        <div>
            {toasts.map(toast => (
                <Notification key={toast.id} />
            ))}
        </div>
    );
};
