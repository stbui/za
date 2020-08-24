import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const DatePicker = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

DatePicker.defaultProps = {};

export default DatePicker;
