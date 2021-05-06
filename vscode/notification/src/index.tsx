import styled, { css } from 'styled-components';

export interface NotificationProps {
    children: any;
    theme?: any;
    disabled?: boolean;
    shape?: 'circle' | 'round' | 'normal';
    type?: any;
    ghost?: boolean;
}

const NotificationRoot = styled.a<NotificationProps>``;

NotificationRoot.defaultProps = {};

export default NotificationRoot;
