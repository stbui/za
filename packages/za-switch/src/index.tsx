import React, { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const color = {
    primary: '#009dff',
    white: '#fff',
};

const size = {
    16: '16px',
    32: '32px',
};

export interface SwitchProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (checked: boolean) => void;
}

export const RadioChecked = css`
    color: ${color.white};
    border-color: ${color.primary};
    background-color: ${color.primary};
`;
export const RadioDisabled = css`
    opacity: 0.5;
    cursor: not-allowed;
`;

export const SwitchRoot: any = styled.label<SwitchProps>`
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: 1rem;
    font-weight: 400;
    color: #454e54;
    vertical-align: middle;
    cursor: pointer;

    ${props => props.disabled && RadioDisabled}
`;
export const SwitchControl = styled.span<SwitchProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${size[32]};
    height: ${size[16]};
    border: solid 1px #c7cdd1;
    border-radius: ${size[16]};
    background-color: ${color.white};

    transition: 150ms border-color, 150ms background-color, 150ms color,
        150ms box-shadow;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        padding: 0;
        margin: 0;
        pointer-events: none;
        -webkit-appearance: none;
    }

    ${props => props.checked && RadioChecked}
`;

const Label = styled.span`
    line-height: ${size[16]};
    margin-left: 0.5em;
    user-select: none;
`;

const Thumb = styled.span`
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-white);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    transform: translateX(
        calc(
            var(--width) / -2 + var(--thumb-size) / 2 -
                (var(--thumb-size) - var(--height)) / 2
        )
    );
    transition: var(--sl-transition-fast) transform ease,
        var(--sl-transition-fast) background-color,
        var(--sl-transition-fast) border-color,
        var(--sl-transition-fast) box-shadow;
`;

export const Switch: FC<SwitchProps> = props => {
    const {
        defaultChecked,
        checked: asChecked,
        disabled,
        id,
        name,
        value,
        onChange,
        children,
    } = props;
    const [checked, setChecked] = useState(defaultChecked || asChecked);

    useEffect(() => {
        setChecked(asChecked);
    }, [asChecked]);

    const onInputChange = event => {
        const {
            target: { checked },
        } = event;

        if (disabled) {
            return;
        }

        setChecked(checked);

        onChange && onChange(checked);
    };

    return (
        <SwitchRoot htmlFor={id} disabled={disabled}>
            <SwitchControl checked={checked}>
                <Thumb />

                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onInputChange}
                />
            </SwitchControl>

            <Label>{children}</Label>
        </SwitchRoot>
    );
};

export default Switch;
