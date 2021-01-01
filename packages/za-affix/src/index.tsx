import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

export interface AffixProps {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;
    offset?: number;
    /**
     * 距离窗口底部达到指定偏移量后触发
     */
    offsetBottom?: number;
    /**
     * 固定状态改变时触发的回调函数
     */
    onChange?: (affixed?: boolean) => void;
    /**
     * 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
     */
    target?: () => Window | HTMLElement | null;
    style?: React.CSSProperties;
}

const AffixStyle = styled.div<any>``;

export const Affix: React.FC<AffixProps> = props => {
    const { offset, ...other } = props;

    const ref = useRef();

    useEffect(() => {}, []);

    return <AffixStyle {...other} ref={ref}></AffixStyle>;
};

Affix.defaultProps = {};

export default Affix;
