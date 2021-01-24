import React from 'react';

const Tab = ({ children, show }) => {
    return <div style={{ display: show ? 'block' : 'none' }}>{children}</div>;
};

Tab.defaultProps = {
    show: true,
};

export default Tab;
