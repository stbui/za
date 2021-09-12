import React, { FC, useState, useEffect } from 'react';
import { themes } from '@stbui/za-theme';
import { SwitchStyle, SwitchStyleProps } from './style';

export interface SwitchProps extends SwitchStyleProps {
    defaultChecked?: boolean;
    onChange: (value: boolean) => void;
    checkedChildren: any;
    unCheckedChildren: any;
}

export const Switch: FC<SwitchProps> = props => {
    const {
        className,
        style,
        theme,
        defaultChecked,
        checked: asChecked,
        disabled,
        onChange,
        checkedChildren,
        unCheckedChildren,
        size,
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
        <SwitchStyle
            disabled={disabled}
            checked={checked}
            size={size}
            className={className}
            style={style}
            theme={theme}
        >
            <div className="switch-btn" onClick={onClick}></div>
            <div className="switch-children">
                {checked ? checkedChildren : unCheckedChildren}
            </div>
        </SwitchStyle>
    );
};

Switch.defaultProps = {
    theme: themes.default,
};

export default Switch;
