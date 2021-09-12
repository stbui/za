import React from 'react';
import styled, { css } from 'styled-components';

export interface ColProps {
    span: number;
    offset: number;
    order: number;
    pull: number;
    push: number;
}

const colum = 24;

const ColStyle = styled.div<ColProps>`
    ${({ span, offset }) => {
        const calcWidth = 100 / (colum / span);
        const calcOffset = 100 / (colum / offset);
        return css`
            box-sizing: border-box;
            flex: 0 0 auto;
            flex-basis: ${calcWidth}%;
            max-width: ${calcWidth}%;

            margin-left: ${calcOffset}%;
        `;
    }}
`;

ColStyle.defaultProps = {
    className: 'za-col',
};

export default ColStyle;
