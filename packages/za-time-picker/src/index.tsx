import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const TimePicker = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

TimePicker.defaultProps = {};

export default TimePicker;
