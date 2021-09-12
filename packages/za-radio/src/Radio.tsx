import React, { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const color = {
    primary: '#009dff',
    white: '#fff',
};

const size = {
    16: '16px',
};

export interface RadioProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (checked: boolean) => void;
}

export const RadioChecked = ({ theme }) => css`
    color: ${color.white};
    border-color: ${theme['primary-color']};
    background-color: ${theme['primary-color']};
`;

export const RadioDisabled = css`
    opacity: 0.5;
    cursor: not-allowed;
`;

export const RadioRoot: any = styled.label<RadioProps>`
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
export const RadioControl = styled.span<RadioProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${size[16]};
    height: ${size[16]};
    border: solid 1px #c7cdd1;
    border-radius: 50%;
    background-color: ${color.white};
    color: transparent;
    transition: 150ms border-color, 150ms background-color, 150ms color,
        150ms box-shadow;

    input[type='radio'] {
        position: absolute;
        opacity: 0;
        padding: 0;
        margin: 0;
        pointer-events: none;
        -webkit-appearance: none;
    }

    ${RadioChecked}
`;

const Label = styled.span`
    line-height: ${size[16]};
    margin-left: 0.5em;
    user-select: none;
`;

const Icon = styled.span`
    display: inline-flex;
    width: ${size[16]};
    height: ${size[16]};
`;

export const RadioIcon = () => (
    <Icon>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                    <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
            </g>
        </svg>
    </Icon>
);

export const Radio: FC<RadioProps> = props => {
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
        <RadioRoot htmlFor={id} disabled={disabled}>
            <RadioControl checked={checked}>
                <RadioIcon />

                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onInputChange}
                />
            </RadioControl>

            <Label>{children}</Label>
        </RadioRoot>
    );
};

Radio.defaultProps = {};

export default Radio;
