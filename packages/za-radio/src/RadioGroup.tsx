import React, { FC, useState } from 'react';

export interface RadioGroupProps {
    defaultValue?: string | number;
    disabled?: boolean;
    onChange?: (val: string | number) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({
    children,
    defaultValue,
    disabled,
    onChange,
}) => {
    const [value, setValue] = useState(defaultValue);

    const onChildChange = (val: string | number) => {
        setValue(val);
        onChange && onChange(val);
    };

    return React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
            disabled: disabled || child.props.disabled,
            checked: value === child.props.value,
            onChange: (checked: boolean) => {
                child.props.onChange && child.props.onChange(checked);
                onChildChange(child.props.value);
            },
        })
    );
};

export default RadioGroup;
