import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const regular = css`
    min-height: 56px;
`;

const dense = css``;

const gutters = css`
    padding-left: 16px;
    padding-right: 16px;
`;

export interface ToolBarProps {
    disableGutters: boolean;
    variant: 'regular' | 'dense';
}

const Root = styled.div<ToolBarProps>`
    display: flex;
    position: relative;
    align-items: center;

    ${props => (props.variant === 'regular' ? regular : dense)}
    ${props => (props.disableGutters ? gutters : null)}
`;

const ToolBar: FC<ToolBarProps> = ({
    children,
    disableGutters,
    variant,
    ...other
}) => {
    return (
        <Root disableGutters={disableGutters} variant={variant} {...other}>
            {children}
        </Root>
    );
};

ToolBar.defaultProps = {
    variant: 'regular',
    disableGutters: false,
};

export default ToolBar;
