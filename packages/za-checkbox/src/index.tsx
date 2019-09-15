import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    font-size: 0.875rem;
    line-height: 1.25rem;
`;

const StyledInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
`;

const StyledLabel = styled.label`
    order: 0;
    margin-right: auto;
    padding-left: 4px;
`;

const Background = styled.div`
    display: inline-flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 2px;
    background-color: initial;
    pointer-events: none;
    will-change: background-color, border-color;
    transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
        border-color 90ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`;

const Checkmark = styled.svg`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;

    path {
        stroke: currentColor;
        stroke-width: 3.12px;
        stroke-dashoffset: 29.7833385;
        stroke-dasharray: 29.7833385;
    }
`;

const Mixedmark = styled.div`
    width: 100%;
    height: 0;
    -webkit-transform: scaleX(0) rotate(0deg);
    transform: scaleX(0) rotate(0deg);
    border-width: 1px;
    border-style: solid;
`;

const Box = styled.div`
    display: inline-block;
    position: relative;
    flex: 0 0 18px;
    box-sizing: initial;
    width: 18px;
    height: 18px;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: bottom;
`;

Container.defaultProps = {
    theme: { primary: '#00bc70' },
};

export const CheckBox = props => {
    const { children, ...other } = props;

    return (
        <Container {...other}>
            <Box>
                <StyledInput type="checkbox" />
                <Background>
                    <Checkmark viewBox="0 0 24 24">
                        <path
                            fill="none"
                            stroke="white"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        ></path>
                    </Checkmark>
                    <Mixedmark></Mixedmark>
                </Background>
            </Box>
            <StyledLabel>{children}</StyledLabel>
        </Container>
    );
};

CheckBox.defaultProps = {
    prefixCls: 'za-checkbox',
};

export default CheckBox;
