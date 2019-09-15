import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
    position: relative;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 12px;

    ${({ theme }) => {
        return css`
            background-color: ${theme.primary.background};
            border-color: ${theme.primary.border};
            color: ${theme.primary.color};
        `;
    }}
`;
const Text = styled.span`
    padding: 0 15px;
`;
const Action = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.2;
    filter: alpha(opacity=20);
    cursor: pointer;
`;
const StyledIcon = styled.i`
    padding: 0 5px;
`;

Root.defaultProps = {
    theme: {
        primary: { color: '#fff', background: '#00bc70', border: '#00bc70' },
    },
};

export const Alert = props => {
    const { children, ...other } = props;

    return (
        <Root {...other}>
            <StyledIcon />
            <Text>{children}</Text>
            <Action>
                <StyledIcon />
            </Action>
        </Root>
    );
};

Alert.defaultProps = {
    prefixCls: 'za-alert',
};

export default Alert;
