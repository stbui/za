import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.span`
    background-color: #ccc;
    z-index: 1;

    &.horizontal {
        height: 4px;
        cursor: row-resize;
        width: 100%;
    }

    &.horizontal:hover {
        background-color: #007fd4;
    }

    &.vertical {
        width: 4px;
        cursor: col-resize;
    }

    &.vertical:hover {
        background-color: #007fd4;
    }

    &.disabled {
        cursor: not-allowed;
    }
    &.disabled:hover {
        border-color: transparent;
    }
`;

const Resizer = props => {
    const { onMouseDown, onTouchEnd, onTouchStart, split } = props;

    return (
        <Root
            className={split}
            onMouseDown={event => onMouseDown(event)}
            onTouchStart={event => {
                event.preventDefault();
                onTouchStart(event);
            }}
            onTouchEnd={event => {
                event.preventDefault();
                onTouchEnd(event);
            }}
        />
    );
};

export default Resizer;
