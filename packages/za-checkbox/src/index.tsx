import React, { FC, useState, useEffect } from 'react';
import { themes } from '@stbui/za-theme';
import { CheckboxStyle, CheckboxStyleProps } from './style';

export interface CheckboxProps extends CheckboxStyleProps {
    defaultChecked?: boolean;
    onChange: (value: boolean) => void;
}

export const CheckboxIcon = ({ checked }) => (
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
);

export const Checkbox: FC<CheckboxProps> = props => {
    const {
        className,
        style,
        theme,
        defaultChecked,
        checked: asChecked,
        disabled,
        onChange,
        children,
    } = props;
    const [checked, setChecked] = useState(defaultChecked || asChecked);

    useEffect(() => {
        setChecked(asChecked);
    }, [asChecked]);

    const onClick = () => {
        if (disabled) {
            return;
        }

        setChecked(!checked);
        onChange && onChange(!checked);
    };

    return (
        <CheckboxStyle
            className={className}
            style={style}
            theme={theme}
            checked={checked}
            disabled={disabled}
        >
            <span className="checkbox" onClick={onClick}>
                <span className="checkbox-inner">
                    <i className="icon icon-select xs checkbox-select-icon"></i>
                </span>
                <input type="checkbox" className="checkbox-input" />
            </span>
            <span className="checkbox-label">{children}</span>
        </CheckboxStyle>
    );
};

Checkbox.defaultProps = {
    theme: themes.default,
};

export default Checkbox;
