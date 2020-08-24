import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const ColorPicker = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

ColorPicker.defaultProps = {};

export default ColorPicker;
