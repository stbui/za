import React, { FC, useState } from 'react';

export interface RadioGroupProps {
    defaultValue?: string | number;
    onChange?: (val: string | number) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({
    children,
    defaultValue,
    onChange,
}) => {
    const [value, setValue] = useState(defaultValue);

    const onRadioChange = (val: string | number) => {
        setValue(val);
        onChange && onChange(val);
    };

    return React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
            selected: value === child.props.value,
            onChange: (val: string | number) => {
                onRadioChange(val);
            },
        })
    );
};

export default RadioGroup;
