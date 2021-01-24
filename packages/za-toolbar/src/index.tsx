import styled, { css } from 'styled-components';

export interface ToolBarProps {
    disableGutters: boolean;
    variant: 'regular' | 'dense';
}

const regular = css`
    min-height: 56px;
`;

const dense = css``;

const gutters = css`
    padding-left: 16px;
    padding-right: 16px;
`;

const ToolBarRoot = styled.div<ToolBarProps>`
    display: flex;
    position: relative;
    align-items: center;

    ${props => (props.variant === 'regular' ? regular : dense)}
    ${props => (props.disableGutters ? gutters : null)}
`;

ToolBarRoot.defaultProps = {
    variant: 'regular',
    disableGutters: false,
};

export default ToolBarRoot;
