import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import RcSwitch from 'rc-switch';

const Container = styled(RcSwitch)`
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 20px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 20px;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.36s;
    user-select: none;
    outline: none;

    &:after {
        position: absolute;
        width: 18px;
        height: 18px;
        left: 2px;
        top: 1px;
        border-radius: 50% 50%;
        background-color: #fff;
        content: ' ';
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
        transform: scale(1);
        transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
        animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
        animation-duration: 0.3s;
        animation-name: rcSwitchOff;
    }

    &.za-switch-checked {
        background-color: ${props => props.theme.primary};

        .za-switch-inner {
            left: 6px;
        }

        &:after {
            left: 22px;
        }
    }

    &.za-switch-inner {
        color: #fff;
        font-size: 12px;
        position: absolute;
        left: 24px;
        top: 0;
    }
`;

Container.defaultProps = {
    theme: { primary: '#00bc70' },
};

export const Switch = props => {
    const { prefixCls, className } = props;
    const classes = classNames({}, className);

    return <Container classNames={classes} prefixCls={prefixCls} {...props} />;
};

Switch.defaultProps = {
    prefixCls: 'za-switch',
};

export default Switch;
