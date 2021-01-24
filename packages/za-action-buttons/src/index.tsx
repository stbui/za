import styled, { css } from 'styled-components';

export interface ActionButtonsProps {
    children: any;
    theme?: any;
    disabled?: boolean;
    shape?: 'round' | 'normal';
    variant?: 'default' | 'primary' | 'warn';
}

const ActionButtonsRoot = styled.div<ActionButtonsProps>``;

ActionButtonsRoot.defaultProps = {
    variant: 'default',
};

export default ActionButtonsRoot;
