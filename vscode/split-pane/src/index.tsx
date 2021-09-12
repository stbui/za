import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import Pane from './Pane';
import Resizer from './Resizer';

const Root = styled.div`
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    position: absolute;
    outline: none;
    overflow: hidden;
    user-select: text;

    &.horizontal {
        bottom: 0;
        flex-direction: column;
        min-height: 100%;
        top: 0;
        width: 100%;
    }

    &.vertical {
        flex-direction: row;
        left: 0;
        right: 0;
    }
`;

function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
        } catch (e) {}
    }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
    if (typeof draggedSize === 'number') {
        const min = typeof minSize === 'number' ? minSize : 0;
        const max =
            typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
        return Math.max(min, Math.min(max, draggedSize));
    }
    if (defaultSize !== undefined) {
        return defaultSize;
    }
    return minSize;
}

function removeNullChildren(children) {
    return React.Children.toArray(children).filter(c => c);
}

class SplitPane extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        const { size, defaultSize, minSize, maxSize, primary } = props;

        const initialSize =
            size !== undefined
                ? size
                : getDefaultSize(defaultSize, minSize, maxSize, null);

        this.state = {
            active: false,
            resized: false,
            pane1Size: primary === 'first' ? initialSize : undefined,
            pane2Size: primary === 'second' ? initialSize : undefined,

            instanceProps: {
                size,
            },
        };
    }

    componentDidMount() {
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('touchmove', this.onTouchMove);
        this.setState(SplitPane.getSizeUpdate(this.props, this.state));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return SplitPane.getSizeUpdate(nextProps, prevState);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('touchmove', this.onTouchMove);
    }

    onMouseDown(event) {
        const eventWithTouches = Object.assign({}, event, {
            touches: [{ clientX: event.clientX, clientY: event.clientY }],
        });
        this.onTouchStart(eventWithTouches);
    }

    onTouchStart(event) {
        const { allowResize, onDragStarted, split } = this.props;
        if (allowResize) {
            unFocus(document, window);
            const position =
                split === 'vertical'
                    ? event.touches[0].clientX
                    : event.touches[0].clientY;

            if (typeof onDragStarted === 'function') {
                onDragStarted();
            }
            this.setState({
                active: true,
                position,
            });
        }
    }

    onMouseMove(event) {
        const eventWithTouches = Object.assign({}, event, {
            touches: [{ clientX: event.clientX, clientY: event.clientY }],
        });
        this.onTouchMove(eventWithTouches);
    }

    getBoundingClientRect(node) {
        if (node.getBoundingClientRect) {
            const width = node.getBoundingClientRect().width;
            const height = node.getBoundingClientRect().height;

            return { width, height };
        }

        return { width: 0, height: 0 };
    }

    onTouchMove(event) {
        const { allowResize, maxSize, minSize, onChange, split, step } =
            this.props;
        const { active, position } = this.state;

        if (allowResize && active) {
            unFocus(document, window);
            const isPrimaryFirst = this.props.primary === 'first';
            const ref = isPrimaryFirst ? this.pane1 : this.pane2;
            const ref2 = isPrimaryFirst ? this.pane2 : this.pane1;
            if (ref) {
                const node = ref;
                const node2 = ref2;

                if (node.getBoundingClientRect) {
                    const { width, height } = this.getBoundingClientRect(node);
                    const current =
                        split === 'vertical'
                            ? event.touches[0].clientX
                            : event.touches[0].clientY;

                    const size = split === 'vertical' ? width : height;

                    let positionDelta = position - current;
                    if (step) {
                        if (Math.abs(positionDelta) < step) {
                            return;
                        }
                        positionDelta = ~~(positionDelta / step) * step;
                    }

                    let sizeDelta = isPrimaryFirst
                        ? positionDelta
                        : -positionDelta;

                    const pane1Order = parseInt(
                        window.getComputedStyle(node).order
                    );
                    const pane2Order = parseInt(
                        window.getComputedStyle(node2).order
                    );
                    if (pane1Order > pane2Order) {
                        sizeDelta = -sizeDelta;
                    }

                    let newMaxSize = maxSize;
                    if (maxSize !== undefined && maxSize <= 0) {
                        const splitPane = this.splitPane;
                        if (split === 'vertical') {
                            newMaxSize =
                                splitPane.getBoundingClientRect().width +
                                maxSize;
                        } else {
                            newMaxSize =
                                splitPane.getBoundingClientRect().height +
                                maxSize;
                        }
                    }

                    let newSize = size - sizeDelta;
                    const newPosition = position - positionDelta;

                    if (newSize < minSize) {
                        newSize = minSize;
                    } else if (maxSize !== undefined && newSize > newMaxSize) {
                        newSize = newMaxSize;
                    } else {
                        this.setState({
                            position: newPosition,
                            resized: true,
                        });
                    }

                    if (onChange) onChange(newSize);

                    this.setState({
                        draggedSize: newSize,
                        [isPrimaryFirst ? 'pane1Size' : 'pane2Size']: newSize,
                    });
                }
            }
        }
    }

    onMouseUp() {
        const { allowResize, onDragFinished } = this.props;
        const { active, draggedSize } = this.state;
        if (allowResize && active) {
            if (typeof onDragFinished === 'function') {
                onDragFinished(draggedSize);
            }
            this.setState({ active: false });
        }
    }

    static getSizeUpdate(props, state) {
        const newState: any = {};
        const { instanceProps } = state;

        if (instanceProps.size === props.size && props.size !== undefined) {
            return {};
        }

        const newSize =
            props.size !== undefined
                ? props.size
                : getDefaultSize(
                      props.defaultSize,
                      props.minSize,
                      props.maxSize,
                      state.draggedSize
                  );

        if (props.size !== undefined) {
            newState.draggedSize = newSize;
        }

        const isPanel1Primary = props.primary === 'first';

        newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
        newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;

        newState.instanceProps = { size: props.size };

        return newState;
    }

    render() {
        const { children, split } = this.props;

        const { pane1Size, pane2Size } = this.state;

        const notNullChildren = removeNullChildren(children);

        return (
            <Root
                className={split}
                ref={node => {
                    this.splitPane = node;
                }}
            >
                <Pane
                    eleRef={node => {
                        this.pane1 = node;
                    }}
                    size={pane1Size}
                    split={split}
                >
                    {notNullChildren[0]}
                </Pane>
                <Resizer
                    onMouseDown={this.onMouseDown}
                    onTouchStart={this.onTouchStart}
                    onTouchEnd={this.onMouseUp}
                    split={split}
                />
                <Pane
                    eleRef={node => {
                        this.pane2 = node;
                    }}
                    size={pane2Size}
                    split={split}
                >
                    {notNullChildren[1]}
                </Pane>
            </Root>
        );
    }
}

SplitPane.defaultProps = {
    allowResize: true,
    minSize: 50,
    primary: 'first',
    split: 'vertical',
};

export default SplitPane;
