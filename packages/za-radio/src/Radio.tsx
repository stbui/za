import React, { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

export interface RadioProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    theme?: any;
}

export const RadioDisabled = css`
    opacity: 0.5;
    cursor: not-allowed;
`;

export const RadioStyle: any = styled.label<RadioProps>`
    ${({ theme, checked, disabled }) => css`
        display: inline-flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 400;
        color: #454e54;
        vertical-align: middle;
        cursor: pointer;

        ${disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}
    `}
`;

export const RadioIcon = () => (
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 16 16">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="currentColor">
                <circle cx="8" cy="8" r="3.42857143"></circle>
            </g>
        </g>
    </svg>
);

export const Radio: FC<RadioProps> = props => {
    const {
        className,
        style,
        theme,
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

    return (
        <RadioStyle
            htmlFor={id}
            className={className}
            style={style}
            theme={theme}
            checked={checked}
            disabled={disabled}
        >
            <span className="radio checked ">
                <span className="radio-inner press"></span>
                <input type="radio" className="radio-input" />
            </span>
            <span className="radio-label">{children}</span>
        </RadioStyle>
    );
};

Radio.defaultProps = {
    theme: themes.default,
};

export default Radio;
