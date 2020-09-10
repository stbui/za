import React, { FC } from 'react';
import styled from 'styled-components';

export interface CheckboxProps {
    defaultChecked?: boolean;
    checked?: boolean;
    id?: any;
    disabled?: boolean;
    onChange?: any;
}

export const CheckboxRoot = styled.label`
    display: inline-flex;
    align-items: center;
    font-family: var(--rb-input-font-family);
    font-size: var(--rb-input-font-size-medium);
    font-weight: var(--rb-input-font-weight);
    color: var(--rb-input-color);
    vertical-align: middle;

    font-size: 0.875rem;
`;

export const CheckboxControl = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--rb-toggle-size);
    height: var(--rb-toggle-size);
    border: solid var(--rb-input-border-width) var(--rb-input-border-color);
    border-radius: 2px;
    background-color: var(--rb-input-background-color);
    color: var(--rb-color-white);
    transition: var(--rb-transition-fast) border-color,
        var(--rb-transition-fast) background-color,
        var(--rb-transition-fast) color, var(--rb-transition-fast) box-shadow;

    width: 18px;
    height: 18px;

    input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        padding: 0;
        margin: 0;
        pointer-events: none;
        -webkit-appearance: none;
    }
`;

const StyledLabel = styled.label`
    order: 0;
    margin-right: auto;
    padding-left: 4px;
`;

const Icon = styled.span`
    display: inline-flex;
    width: var(--rb-toggle-size);
    height: var(--rb-toggle-size);

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const CheckboxIcon = ({ checked }) => (
    <Icon>
        <svg viewBox="0 0 16 16">
            <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
            >
                <g stroke="currentColor" stroke-width="2">
                    {checked ? (
                        <g transform="translate(3.428571, 3.428571)">
                            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                    ) : (
                        <g transform="translate(2.285714, 6.857143)">
                            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                    )}
                </g>
            </g>
        </svg>
    </Icon>
);

export const Checkbox: FC<CheckboxProps> = props => {
    const { children, id, checked, disabled, ...other } = props;

    return (
        <CheckboxRoot htmlFor={id} {...other}>
            <CheckboxControl>
                <CheckboxIcon checked={checked} />
                <input type="checkbox" id={id} />
            </CheckboxControl>

            <StyledLabel>{children}</StyledLabel>
        </CheckboxRoot>
    );
};

export default Checkbox;
