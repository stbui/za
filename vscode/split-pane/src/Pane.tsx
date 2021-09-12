import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
    flex: 1;
    position: relative;
    outline: none;
`;

const Pane = props => {
    const {
        children,
        className,
        split,
        style: styleProps,
        size,
        eleRef,
        ...reset
    } = props;

    let style: any = {};
    if (size) {
        if (split === 'vertical') {
            style.width = size;
        } else {
            style.height = size;
            style.display = 'flex';
        }
        style.flex = 'none';
    }

    return (
        <Root ref={eleRef} dir={split} size={size} style={style} {...reset}>
            {children}
        </Root>
    );
};

export default Pane;
