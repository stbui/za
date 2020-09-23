import React, { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface MatInputProps {
    animated?: boolean;
    focus?: boolean;
    value?: any;
    defaultValue?: any;
    label?: any;
    maxLength?: any;
    type?: any;
    placeholder?: any;
    disabled?: any;
    readOnly?: any;
    endAdorn?: any;
    onKeyDown?: any;
    text?: any;
    onFocus?: any;
    onBlur?: any;
    onChange?: any;
}

const MatInputRoot = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    label {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
    }
`;
const MatInputLabel = styled.div<MatInputProps>`
    font-weight: 400;
    font-size: 13px;
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
    color: #616161;

    ${props =>
        props.animated &&
        css`
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            padding: 0;
            font-size: 14px;
            line-height: 1;
            margin: 0;
            transform-origin: top left;
            transform: translateY(24px) scale(1);
            transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
        `}

    ${props =>
        props.animated &&
        props.focus &&
        css`
            transform: translateY(0.5px) scale(0.75);
            color: #00bc70;
        `}

        ${props =>
            props.animated &&
            props.value &&
            css`
                transform: translateY(0.5px) scale(0.75);
                color: #00bc70;
            `}
`;
const MatInputField = styled.div<MatInputProps>`
    position: relative;

    ${props =>
        props.animated &&
        css`
            margin-top: 16px;
        `}

    input {
        width: 100%;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        border-radius: 4px;
        transition: all 0.3s;
        height: 32px;
    }
`;
const MatInputSelectText = styled.span``;
const MatInputdivider = styled.hr<MatInputProps>`
    background: rgba(0, 0, 0, 0.12);
    border: 0;
    content: '';
    display: block;
    height: 1px;
    margin: 0;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s;

    &:after {
        background: #00bc70;
        content: '';
        display: block;
        height: 2px;
        transition-duration: 0.15s;
        transition-property: width;
        width: 0;
        margin: auto;

        ${props =>
            props.focus &&
            css`
                width: 100%;
            `}
    }
`;

export const MatInput: FC<MatInputProps> = props => {
    const {
        label,
        animated,
        maxLength,
        type,
        placeholder,
        disabled,
        readOnly,
        endAdorn,
        onKeyDown,
        text,
        onChange,
        onFocus,
        onBlur,
        defaultValue,
        ...other
    } = props;

    const [value, setValue] = useState(defaultValue);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if ('value' in props) {
            setValue(props.value);
        }
    }, [props.value]);

    const handleChange = event => {
        setValue(event.target.value);
        onChange && onChange(event.target.value, event);
    };

    const handleFocus = event => {
        if (!readOnly && !disabled) {
            setFocus(true);
        }

        onFocus && onFocus(event.target.value, event);
    };

    const handleBlur = event => {
        if (!readOnly && !disabled) {
            setFocus(false);
        }

        onBlur && onBlur(event.target.value, event);
    };

    return (
        <MatInputRoot {...other}>
            <label>
                <MatInputLabel animated={animated} focus={focus} value={value}>
                    {label}
                </MatInputLabel>
                <MatInputField animated={animated} focus={focus}>
                    {text ? (
                        <MatInputSelectText
                            className="mat-select-text"
                            onClick={handleFocus}
                        >
                            {value}
                        </MatInputSelectText>
                    ) : (
                        <input
                            value={value}
                            type={type}
                            maxLength={maxLength}
                            placeholder={focus ? placeholder : null}
                            disabled={disabled}
                            readOnly={readOnly}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onKeyDown={onKeyDown}
                        />
                    )}
                </MatInputField>
            </label>
            {endAdorn}
            <MatInputdivider focus={focus} />
        </MatInputRoot>
    );
};

MatInput.defaultProps = {
    animated: false,
};

export default MatInput;
