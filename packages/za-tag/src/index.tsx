import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

export interface TagProps {
    closable?: boolean;
    visible?: boolean;
    color?: string;
    /** 关闭时的回调 */
    onClose?: Function;
    /** 动画关闭后的回调 */
    afterClose?: Function;
}

export const TagRoot = styled.span<TagProps>`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    border-radius: 4px;
    cursor: default;
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);

    color: ${props => (props.color ? '#fff' : '#343434')};
    background: ${props => (props.color ? props.color : '#f2f2f2')};
    border: 1px solid ${props => (props.color ? props.color : '#f2f2f2')};
`;

export const TagIcon = styled.span`
    display: inline-block;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    font-size: 12px;
    transform: scale(0.83333333) rotate(0deg);
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const Tag: FC<TagProps> = props => {
    const { children, onClose, color, closable, ...other } = props;
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if ('visible' in props) {
            setVisible(props.visible!);
        }
    }, [props.visible]);

    const onIconClick = () => {
        setVisible(!visible);
        onClose && onClose();
    };

    return visible ? (
        <TagRoot {...props}>
            {children}
            {closable ? (
                <TagIcon onClick={onIconClick}>
                    <svg
                        viewBox="64 64 896 896"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                    >
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                </TagIcon>
            ) : null}
        </TagRoot>
    ) : null;
};

Tag.defaultProps = { closable: false };

export default Tag;
