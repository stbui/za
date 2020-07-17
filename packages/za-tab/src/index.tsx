import React, { FC } from 'react';
import styled from 'styled-components';

export interface TabProps {
    children: any;
    theme?: any;
}

const Root = styled.div``;

export const Tab: FC<TabProps> = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Tab.defaultProps = {};

export default Tab;
