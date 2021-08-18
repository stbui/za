import React from 'react';
import styled from 'styled-components';

const TimelineItemStyle = styled.div`
    position: relative;
    padding: 0 0 20px;
    list-style: none;
    margin: 0;
    font-size: 14px;

    .timeline-item-tail {
        position: absolute;
        left: 4px;
        top: 0.75em;
        height: 100%;
        border-left: 2px solid #e9e9e9;
    }
    .timeline-item-pending .timeline-item-head {
        font-size: 12px;
    }
    .timeline-item-pending .timeline-item-tail {
        display: none;
    }
    .timeline-item-head {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 100px;
        border: 2px solid transparent;
    }
    .timeline-item-head-blue {
        border-color: #337eff;
        color: #337eff;
    }
    .timeline-item-head-red {
        border-color: #f24957;
        color: #f24957;
    }
    .timeline-item-head-green {
        border-color: #26bd71;
        color: #26bd71;
    }
    .timeline-item-head-custom {
        position: absolute;
        text-align: center;
        line-height: 1;
        margin-top: 0;
        border: 0;
        height: auto;
        border-radius: 0;
        padding: 1px;
        transform: translate(-50%, -50%);
        top: 5.5px;
        left: 5px;
        width: auto;
    }
    .timeline-item-content {
        margin: 0 0 0 18px;
        position: relative;
        top: -6px;
    }
    .timeline-item-last .timeline-item-tail {
        display: none;
    }
    .timeline-item-last .timeline-item-content {
        min-height: 48px;
    }
    .timeline.timeline-alternate .timeline-item-tail,
    .timeline.timeline-right .timeline-item-tail,
    .timeline.timeline-alternate .timeline-item-head,
    .timeline.timeline-right .timeline-item-head,
    .timeline.timeline-alternate .timeline-item-head-custom,
    .timeline.timeline-right .timeline-item-head-custom {
        left: 50%;
    }
    .timeline.timeline-alternate .timeline-item-head,
    .timeline.timeline-right .timeline-item-head {
        margin-left: -4px;
        /* stylelint-disable-next-line */
    }
    .timeline.timeline-alternate .timeline-item-head-custom,
    .timeline.timeline-right .timeline-item-head-custom {
        margin-left: 1px;
    }
    .timeline.timeline-alternate .timeline-item-left,
    .timeline.timeline-right .timeline-item-left {
        /* stylelint-disable-next-line */
    }
    .timeline.timeline-alternate .timeline-item-left .timeline-item-content,
    .timeline.timeline-right .timeline-item-left .timeline-item-content {
        text-align: left;
        left: 50%;
        width: 50%;
    }
    .timeline.timeline-alternate .timeline-item-right,
    .timeline.timeline-right .timeline-item-right {
        /* stylelint-disable-next-line */
    }
    .timeline.timeline-alternate .timeline-item-right .timeline-item-content,
    .timeline.timeline-right .timeline-item-right .timeline-item-content {
        text-align: right;
        right: 50%;
        margin-right: 18px;
        width: 50%;
        left: -30px;
    }
    .timeline.timeline-right .timeline-item-right .timeline-item-tail,
    .timeline.timeline-right .timeline-item-right .timeline-item-head,
    .timeline.timeline-right .timeline-item-right .timeline-item-head-custom {
        left: 100%;
    }
    .timeline.timeline-right .timeline-item-right .timeline-item-content {
        right: 0;
        width: 100%;
        left: -30px;
    }
    .timeline.timeline-pending .timeline-item-last .timeline-item-tail {
        border-left: 2px dotted #e9e9e9;
        display: block;
    }
    .timeline.timeline-reverse .timeline-item-last .timeline-item-tail {
        display: none;
    }
    .timeline.timeline-reverse .timeline-item-pending .timeline-item-tail {
        border-left: 2px dotted #e9e9e9;
        display: block;
    }
    .timeline.timeline-reverse .timeline-item-pending .timeline-item-content {
        min-height: 48px;
    }
`;

export const Timeline = props => {
    const { children, ...other } = props;

    return (
        <TimelineItemStyle>
            <div className="timeline-item-tail"></div>
            <div className="timeline-item-head timeline-item-head-blue"></div>
            <div className="timeline-item-content">{children}</div>
        </TimelineItemStyle>
    );
};

Timeline.defaultProps = {};

export default Timeline;
