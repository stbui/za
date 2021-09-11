import styled, { css } from 'styled-components';

export interface ToolBarProps {
    disableGutters: boolean;
    variant: 'regular' | 'dense';
}

const ToolBarStyle = styled.div<ToolBarProps>`
    ${({ theme, variant, disableGutters }) => css`
        display: flex;
        position: relative;
        align-items: center;

        &.toolbar-regular {
            min-height: 56px;
        }

        &.toolbar-dense {
        }

        ${disableGutters &&
        css`
            padding-left: 16px;
            padding-right: 16px;
        `}
    `}
`;

ToolBarStyle.defaultProps = {
    variant: 'regular',
    disableGutters: false,
};

export default ToolBarStyle;
