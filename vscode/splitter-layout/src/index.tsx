import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled, { css } from 'styled-components';

const ViewRoot = styled.div`
    position: relative;
    flex: 0 0 auto;
    overflow: auto;

    ${({ primary }) =>
        primary &&
        css`
            flex: 1 1 auto;
        `}
`;

const View = ({ children, vertical, size, primary }: any) => {
    const measure = vertical ? 'height' : 'width';
    return (
        <ViewRoot primary={primary} style={{ [measure]: size }}>
            {children}
        </ViewRoot>
    );
};

const SplitterResizerLine = ({ onDragStart, ...reset }) => {
    return (
        <div
            className="layout-splitter"
            {...reset}
            onMouseDown={onDragStart}
            onTouchStart={onDragStart}
        ></div>
    );
};

export interface SplitterLayoutProps {
    vertical?: boolean;
    primaryMinSize: number;
    secondaryMinSize: number;
    primaryIndex?: number;
    secondaryInitialSize?: number;
    children?: any;
}

const Root = styled.div<SplitterLayoutProps>`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > .layout-splitter {
        flex: 0 0 auto;
        width: 4px;
        height: 100%;
        cursor: col-resize;
        background-color: #ccc;

        &:hover {
            background-color: #007fd4;
        }
    }

    &.layout-changing {
        cursor: col-resize;
    }

    /* vertical */
    ${({ vertical }) =>
        vertical &&
        css`
            flex-direction: column;

            > .layout-splitter {
                width: 100%;
                height: 4px;
                cursor: row-resize;
            }
        `}
`;

let resizing = false;

export const SplitterLayout = (props: SplitterLayoutProps) => {
    const {
        children,
        primaryMinSize,
        secondaryMinSize,
        vertical,
        primaryIndex,
        secondaryInitialSize,
        ...other
    } = props;

    // const [resizing, setResizing] = useState(false);
    const [secondaryPaneSize, setSecondaryPaneSize] = useState(0);
    const containerRef = useRef();
    const splitterRef = useRef();

    const getSecondaryPaneSize = (
        containerRect,
        splitterRect,
        clientPosition,
        offsetMouse: boolean
    ) => {
        let totalSize: number;
        let splitterSize: number;
        let offset: number;

        if (vertical) {
            totalSize = containerRect.height;
            splitterSize = splitterRect.height;
            offset = clientPosition.top - containerRect.top;
        } else {
            totalSize = containerRect.width;
            splitterSize = splitterRect.width;
            offset = clientPosition.left - containerRect.left;
        }

        if (offsetMouse) {
            offset -= splitterSize / 2;
        }

        if (offset < 0) {
            offset = 0;
        } else if (offset > totalSize - splitterSize) {
            offset = totalSize - splitterSize;
        }

        let secondaryPaneSize;

        secondaryPaneSize = totalSize - splitterSize - offset;

        let primaryPaneSize = totalSize - splitterSize - secondaryPaneSize;

        if (primaryPaneSize < primaryMinSize) {
            secondaryPaneSize = Math.max(
                secondaryPaneSize - (primaryMinSize - primaryPaneSize),
                0
            );
        } else if (secondaryPaneSize < secondaryMinSize) {
            secondaryPaneSize = Math.min(
                totalSize - splitterSize - primaryMinSize,
                secondaryMinSize
            );
        }

        return secondaryPaneSize;
    };

    const getElementReact = () => {
        const $container: any = containerRef.current;
        const $splitter: any = splitterRef.current;

        const containerRect = $container.getBoundingClientRect();
        const splitterRect = $splitter
            ? $splitter.getBoundingClientRect()
            : { left: 0, top: 0, width: 0, height: 0 };

        return { containerRect, splitterRect };
    };

    const handleResize = () => {
        const { containerRect, splitterRect } = getElementReact();
        const secondaryPaneSize = getSecondaryPaneSize(
            containerRect,
            splitterRect,
            {
                left: splitterRect.left,
                top: splitterRect.top,
            },
            false
        );

        setSecondaryPaneSize(secondaryPaneSize);
    };

    const handleMouseUp = () => {
        resizing = false;
    };

    const handleSplitterMouseDown = () => {
        resizing = true;
    };

    const handleMouseMove = e => {
        if (resizing) {
            const $container: any = containerRef.current;
            const $splitter: any = splitterRef.current;

            const containerRect = $container.getBoundingClientRect();
            const splitterRect = $splitter.getBoundingClientRect();
            const secondaryPaneSize = getSecondaryPaneSize(
                containerRect,
                splitterRect,
                {
                    left: e.clientX,
                    top: e.clientY,
                },
                true
            );
            setSecondaryPaneSize(secondaryPaneSize);
        }
    };

    const handleTouchMove = e => {
        handleMouseMove(e.changedTouches[0]);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);

        //
        let secondaryPaneSize;
        if (secondaryInitialSize) {
            secondaryPaneSize = secondaryPaneSize;
        } else {
            const { containerRect, splitterRect } = getElementReact();

            secondaryPaneSize = getSecondaryPaneSize(
                containerRect,
                splitterRect,
                {
                    left:
                        containerRect.left +
                        (containerRect.width - splitterRect.width) / 2,
                    top:
                        containerRect.top +
                        (containerRect.height - splitterRect.height) / 2,
                },
                false
            );
        }

        setSecondaryPaneSize(secondaryPaneSize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const _children = React.Children.toArray(children).slice(0, 2);
    if (children.length === 0) {
        _children.push(<div />);
    }

    const _primaryIndex =
        primaryIndex !== 0 && primaryIndex !== 1 ? 0 : primaryIndex;

    const wrappedChildren = _children.map((item, index) => {
        let primary = true;
        let size;

        if (children.length > 1 && index !== _primaryIndex) {
            primary = false;
            size = secondaryPaneSize;
        }

        return (
            <View primary={primary} vertical={vertical} size={size}>
                {item}
            </View>
        );
    });

    return (
        <Root {...other} vertical={vertical} ref={containerRef}>
            {wrappedChildren[0]}

            {wrappedChildren.length > 1 && (
                <div
                    ref={splitterRef}
                    className="layout-splitter"
                    onMouseDown={handleSplitterMouseDown}
                    onTouchStart={handleSplitterMouseDown}
                ></div>
            )}

            {wrappedChildren.length > 1 && wrappedChildren[1]}
        </Root>
    );
};

SplitterLayout.defaultProps = {
    primaryMinSize: 0,
    secondaryMinSize: 0,
    primaryIndex: 0,
    vertical: false,
};

export default SplitterLayout;
