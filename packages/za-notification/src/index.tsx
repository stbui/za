import { NotificationContainer } from './container';
import usePortal from '@stbui/za-overlay';

const applyToast = () => {};

const notification = () => {};

notification.open = () => {
    applyToast();
};
notification.success = () => {
    applyToast();
};

export default notification;
