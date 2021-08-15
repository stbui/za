import React, { useState } from 'react';
import styled from 'styled-components';

export interface CollapsePanelProps {
    // Header
    header?: string | number | Function;

    // Status
    showClose?: boolean;
    disabled?: boolean;
    isActive?: boolean;

    // Ref
    itemKey?: () => void;

    // Event
    onItemClick?: () => void;
    onCloseItem?: () => void;
}
const CollapsePanelStyle = styled.div`
    border-bottom: 1px solid #e1e3e6;

    &:first-child .collapse-header {
        border-top: 0;
    }

    .collapse-header {
        position: relative;
        height: 48px;
        padding-left: 16px;
        line-height: 48px;
        font-size: 14px;
        box-sizing: content-box;
        color: #333;
        cursor: pointer;
    }
    .collapse-header .close {
        display: none;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        text-align: center;
    }
    .collapse-header .z-close-show {
        display: block;
    }
    .collapse-header .arrow {
        display: block;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        text-align: center;
    }
    .collapse-header .icon {
        font-size: 10px;
        color: #999;
    }
    .collapse-header-disabled {
        cursor: not-allowed;
        color: #999;
    }
    .collapse-header-disabled .icon {
        color: #999;
    }
    .collapse-header-close {
        padding-left: 40px;
    }
    .collapse-header-close .arrow {
        top: 50%;
        left: 16px;
        right: inherit;
        transform: translateY(-50%);
        text-align: center;
    }
    .collapse-header-custom {
        padding: 0;
    }
    .collapse-header-custom .arrow {
        display: none;
    }

    .collapse-content-box {
        padding: 18px 16px;
        border-top: 1px solid #e1e3e6;
        background-color: #fff;
        clear: both;
    }
    .collapse-content-active {
        display: block;
    }

    .collapse-content-inactive {
        display: none;
    }
`;

export const CollapsePanel: React.FC<CollapsePanelProps> = props => {
    const {
        disabled,
        onItemClick,
        onCloseItem,
        header,
        showClose,
        isActive,
        children,
        itemKey,
    } = props;

    const handleItemClick = () => {
        if (!disabled) {
            onItemClick();
        }
    };

    const handleItemClose = e => {
        e.stopPropagation();
        if (!disabled) {
            onCloseItem();
        }
    };

    return (
        <CollapsePanelStyle {...props}>
            <div className="collapse-header" onClick={handleItemClick}>
                <div className="arrow">
                    <i className="top icon"></i>
                </div>
                <div className="title">{header}</div>
                <div className="close" onClick={handleItemClose}>
                    <i className="picture-close icon"></i>
                </div>
            </div>
            <div className="collapse-content">
                <div className="collapse-content-box">{children}</div>
            </div>
        </CollapsePanelStyle>
    );
};

CollapsePanel.defaultProps = { isActive: false, disabled: false };

export default CollapsePanel;
