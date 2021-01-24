import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface SelectProps {
    defalutValue?: any;
    value?: any;
    onChange?: any;
}

function hasClass(elem, className) {
    if (elem.classList) {
        return elem.classList.contains(className);
    }
    return new RegExp(`(^| )${className}( |$)`, 'gi').test(elem.className);
}

function clickOutside(elem, source, inside, outside) {
    let isIn = false;
    while (elem) {
        if (typeof source === 'string') {
            if (hasClass(elem, source)) {
                isIn = true;
                if (inside) {
                    inside(elem);
                }
            }
        } else if (elem === source) {
            isIn = true;
            if (inside) {
                inside(elem);
            }
        }
        elem = elem.parentNode;
    }
    if (!isIn && outside) {
        outside();
    }
    return isIn;
}

export const SelectRoot = styled.div<SelectProps>`
    position: relative;
`;

export const Menu = styled.div`
    position: absolute;
    font-size: 14px;
    padding-top: 4px;
    padding-bottom: 4px;
    z-index: 10;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    box-shadow: 0px 2px 8px 0px rgba(128, 128, 128, 1);
    width: 100%;
    max-height: 288px;
    overflow: auto;
    top: 58px;

    > ul {
        padding: 0;
        margin: 0;
    }
`;

export const Select: FC<SelectProps> = ({
    children,
    defalutValue,
    value,
    onChange,
}) => {
    const [val, setVal] = useState(defalutValue || value);
    const [visible, setVisible] = useState(false);

    const handleDocumentClick = event => {};

    const handleFocus = event => {
        setVisible(true);
    };

    const itemClick = (value, record) => {
        setVisible(false);
        setVal(value);

        onChange && onChange(value, record);
    };

    const handleInputChange = value => {
        onChange && onChange(value);
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
    }, 1);

    return (
        <SelectRoot>
            {/* <Input
                value={val}
                placeholder={placeholder}
                text={type}
                animated={animated}
                label={label}
                endAdorn={<Icon onClick={handleFocus} />}
                onChange={handleInputChange}
                onFocus={handleFocus}
            /> */}

            <Menu>
                <ul>
                    {React.Children.toArray(children).length
                        ? React.Children.map(children, (child: any) => {
                              return React.cloneElement(child, {
                                  onClick: itemClick,
                              });
                          })
                        : null}
                </ul>
            </Menu>
        </SelectRoot>
    );
};

export default Select;
