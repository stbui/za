import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
    children: any;
    theme: any;
    disabled?: boolean;
    bordered?: boolean;
    color?: string;
    shape?: string;
}

const disabledStyle = css`
    &[disabled] {
        opacity: 0.5;
    }
`;

const Container = styled.button<ButtonProps>`
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #fff;
    display: inline-flex;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 4px 12px;
    line-height: 1.5;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    font-size: 100%;
    background-color: ${({ theme }) => theme.primary};

    ${({ disabled }) => disabled && disabledStyle}

    border-radius: ${({ shape }) => {
        if (shape === 'round') {
            return '1000px';
        }
        return '4px';
    }};
`;

Container.defaultProps = {
    theme: { primary: '#00bc70' },
};

export const Button: FC<ButtonProps> = props => {
    const { children, theme, disabled, bordered, color, shape } = props;

    return (
        <Container
            theme={theme}
            disabled={disabled}
            bordered={bordered}
            color={color}
            shape={shape}
        >
            {children}
        </Container>
    );
};

export default Button;
