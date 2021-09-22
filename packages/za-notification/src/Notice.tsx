import React from 'react';
import styled from 'styled-components';

const NoticeStyle = styled.div`

    .notice-content {
    }
    .notice-close {
    }

    .notice-close-x {
    }
`;

const Notice = props => {
    const { closable, closeIcon, children } = props;

    const onMouseEnter = () => {};
    const onMouseLeave = () => {};

    return (
        <NoticeStyle onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="notice-content">{children}</div>
            {closable ? (
                <a className="notice-close">
                    {closeIcon || <span className="notice-close-x" />}
                </a>
            ) : null}
        </NoticeStyle>
    );
};

Notice.defaultProps = {
    duration: 1.5,
};

export default Notice;
