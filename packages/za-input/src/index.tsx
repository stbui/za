import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';

const Addon = styled.span`
    white-space: nowrap;
    vertical-align: middle;
    position: relative;
    padding: 0 12px;
    color: #343434;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 4px;
    transition: all 0.3s;
`;

const InputStyle = styled.span`
    margin: 0;
    padding: 0;
    color: #343434;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    display: flex;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    input {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-variant: tabular-nums;
        font-feature-settings: 'tnum', 'tnum';
        position: relative;
        display: inline-block;
        width: 100%;
        height: 32px;
        padding: 6px 12px;
        color: #343434;
        font-size: 14px;
        line-height: 1.5;
        background-color: #fafafa;
        background-image: none;
        border: 1px solid #cccfd7;
        transition: all 0.3s;
        outline: 0;
    }
`;

const Input = ({ addonBefore, addonAfter, value, onChange, ...other }) => {
    return (
        <InputStyle>
            {addonBefore ? <Addon>{addonBefore}</Addon> : null}
            <input placeholder="请输入" value={value} onChange={onChange} />
            {addonAfter ? <Addon>{addonAfter}</Addon> : null}
        </InputStyle>
    );
};

Input.defaultProps = {
    theme: themes.default,
};

export default Input;
