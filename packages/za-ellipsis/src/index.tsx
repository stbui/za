import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

interface EllipsisProps {
    tooltip?: boolean;
    tooltipProps?: any;
    length?: number;
    lines?: number;
    fullWidthRecognition?: boolean;
    className?: string;
    width?: number | string;
    style?: React.CSSProperties;
    prefix?: string;
}

export const Ellipsis = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Ellipsis.defaultProps = {
    fullWidthRecognition: false,
    tooltip: true,
    tooltipProps: {},
};

export default Ellipsis;
