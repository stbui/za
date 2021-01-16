import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const FooterToolbar = props => {
    const { children, ...other } = props;
    const [offset, setOffset] = React.useState(0);

    return (
        <div>
            <div className={`footer-toolbar-inner`}>{children}</div>
        </div>
    );
};

FooterToolbar.defaultProps = {};

export default FooterToolbar;
