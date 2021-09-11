import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OverlayStyle = styled.div`
    position: absolute;
    pointer-events: auto;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
    align-items: center;
`;

const Overlay: React.FC<{ children: React.ReactNode }> = props => {
    return ReactDOM.createPortal(
        <OverlayStyle {...props}>{props.children}</OverlayStyle>,
        document.getElementById('overlay-container')!
    );
};

export default Overlay;
