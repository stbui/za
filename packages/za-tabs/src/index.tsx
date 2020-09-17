import React, { useState, Children, Fragment } from 'react';
import styled from 'styled-components';

export interface TabsProps {
    label?: string;
    defaultValue?: any;
    onChange?: any;
    extra?: any;
    disabled?: any;
}

const TabsRoot = styled.div`
    position: relative;
`;

const Header = styled.ul`
    display: flex;
    font-size: 16px;
    position: relative;
    white-space: nowrap;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 20px 0;
    list-style: none;
    padding: 0;

    & > li {
        position: relative;
        padding-bottom: 16px;
        margin-right: 28px;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;
        text-decoration: none;
        color: #909090;

        &:hover {
            color: #343434;
        }

        &.active {
            font-weight: bold;
            color: #343434;

            &::before {
                color: #00bc70;
                content: ' ';
                position: absolute;
                bottom: 0;
                height: 4px;
                left: 0;
                right: 0;
                background: currentColor;
            }
        }
    }
`;

const Title = styled.li<any>`
    position: relative;
    padding-bottom: 16px;
    margin-right: 28px;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    text-decoration: none;
    color: #909090;

    &:hover {
        color: #343434;
    }

    &.active {
        font-weight: bold;
        color: #343434;

        &::before {
            color: #00bc70;
            content: ' ';
            position: absolute;
            bottom: 0;
            height: 4px;
            left: 0;
            right: 0;
            background: currentColor;
        }
    }
`;

export default ({ children, defaultValue, onChange, extra, disabled }) => {
    const [value, setValue] = useState(defaultValue);

    const handleNavClick = (tab, index) => {
        if (disabled) {
            return;
        }

        setValue(index);

        onChange && onChange(tab, index);
    };

    return (
        <TabsRoot>
            <Header>
                {Children.map(children, (child, index) => {
                    const i = child.props.value || index;
                    return (
                        <Fragment>
                            <Title
                                className={value === i ? 'active' : null}
                                onClick={() => handleNavClick(child, i)}
                            >
                                {child.props.label}
                            </Title>
                        </Fragment>
                    );
                })}

                {extra}
            </Header>

            {Children.map(children, (child, index) => {
                const i = child.props.value || index;

                return (
                    <div style={{ display: value === i ? 'block' : 'none' }}>
                        {child.props.children}
                    </div>
                );
                // return React.cloneElement(child.props.children, { show:   === i });
            })}
        </TabsRoot>
    );
};
