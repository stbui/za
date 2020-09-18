import React from 'react';
import styled from 'styled-components';

export interface PopoverProps {
    open?: boolean;
    title?: any;
    type?: any;
}

export const PopoverRoot = styled.div`
    position: absolute;
    display: flex;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transform: scale(0);
    opacity: 0.5;
    border-radius: 3px;
    z-index: 10;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: inherit;
    background: #fff;
    visibility: hidden;
`;

export const PopoverContent = styled.div`
    box-sizing: border-box;
    display: flex;
    width: max-content;
    padding: 0 15px;
    flex: 1;
    flex-direction: column;
`;

export const PopoverTitle = styled.div`
    line-height: 30px;
    padding: 15px 30px 0 0;
    font-weight: 700;
    font-size: 14px;
    color: #4c5161;
    user-select: none;
    cursor: default;
`;

export const PopoverBody = styled.div`
    flex: 1;
    padding: 5px 0 15px 0;
`;
export const PopoverFooter = styled.div`
    padding: 3px 0 15px 0;
    margin-top: -3px;
    text-align: right;
    white-space: nowrap;
`;
export const PopoverType = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    font-size: 22px;
    margin: 15px -10px 0 15px;
`;

export const Popover = props => {
    const { children, ...other } = props;

    return (
        <React.Fragment>
            {children}
            <Popover {...other}>
                <PopoverContent>
                    <PopoverBody></PopoverBody>
                </PopoverContent>
            </Popover>
        </React.Fragment>
    );
};

Popover.defaultProps = {};

export default Popover;
