import React, { FC } from 'react';
import styled from 'styled-components';

export interface SwitchProps {
    children: any;
    theme?: any;
}

const Root = styled.div``;

export const Switch: FC<SwitchProps> = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Switch.defaultProps = {};

export default Switch;
