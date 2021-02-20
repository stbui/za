import React from 'react';
import styled from 'styled-components';

const DrawerStyle: any = styled.div`
    box-shadow: -2px 0 8px rgb(0 0 0 / 15%);
    width: 30vw;
    position: fixed;
    background: #fff;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    max-width: 100%;
    box-sizing: border-box;
    height: 100%;
    z-index: 1000;

    .drawer-header {
    }

    .drawer-body {
    }

    .drawer-footer {
    }
`;

const Drawer = props => {
    const { title, children, footer } = props;
    return (
        <DrawerStyle>
            <div className="drawer-header">{title}</div>
            <div className="drawer-body">{children}</div>
            <div className="drawer-footer">{footer}</div>
        </DrawerStyle>
    );
};

Drawer.defaultProps = {};

export default Drawer;
