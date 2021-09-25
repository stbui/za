import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import Mask from '@stbui/za-mask';
import usePortal from '@stbui/za-overlay';
import Icon from '@stbui/za-icon';

import { PicturePreviewStyle } from './style';

type ImageItem = {
    rotateValue?: number;
    src?: string;
    alt?: string;
    name?: string;
};

export interface PicturePreviewProps {
    /**
     * 当前展示第几张图片
     */
    activeIndex?: number;
    /**
     * 是否可拖动
     */
    draggable?: boolean;
    /**
     * 是否允许通过按 ESC 键关闭
     */
    esc?: boolean;
    /**
     * 是否展示遮罩层
     */
    mask?: boolean;
    /**
     * 关闭后的回调函数
     */
    onClose?: () => void;
    /**
     * 是否展示图片总数和当前进度
     */
    progress?: boolean;
    /**
     * 设置图片的源数据，可选，格式为 [{src: ""[, name: ""]}]。当不设置 source 时可以手动构造子节点，子节点需是 img 标签，且包含 src 属性。若 source 与子节点同时存在，子节点将被忽略。
     */
    source: ImageItem[];
    /**
     * 是否展示工具栏
     */
    toolbar?: boolean;
    /**
     * 是否展示图片查看器
     */
    visible?: boolean;
    /**
     * 图片容器类名
     */
    className?: string;
    /**
     * 图片容器样式
     */
    style?: React.CSSProperties;
    children?: any;
}

export const PicturePreview = (props: PicturePreviewProps) => {
    const { source, activeIndex, visible, children, ...other } = props;
    const [current, setCurrent] = useState(activeIndex || 0);

    const { Protal, onClose, onShow, isShow } = usePortal({
        defaultShow: visible,
        closeOnOutSide: false,
    });

    const goIndex = (delta: number) => {
        const index = (current + delta + source.length) % source.length;
        setCurrent(index);
    };

    const onShowAndActiveIndex = index => {
        setCurrent(index);
        onShow();
    };

    return (
        <>
            {children &&
                children({
                    onClose,
                    onShow,
                    onShowAndActiveIndex,
                    isShow,
                    source,
                })}
            <Protal>
                <PicturePreviewStyle {...other}>
                    <div>
                        {source.map((item, index) => {
                            return (
                                <img
                                    className={
                                        current === index
                                            ? 'picture-preview-img show'
                                            : 'picture-preview-img'
                                    }
                                    key={index}
                                    src={item.src}
                                    alt={item.alt}
                                />
                            );
                        })}
                    </div>

                    <Icon
                        type="OutlineClose"
                        className="picture-preview-close"
                        onClick={onClose}
                    />
                    <i
                        className="picture-preview-prev"
                        onClick={() => goIndex(-1)}
                    >
                        prev
                    </i>
                    <i
                        className="picture-preview-next"
                        onClick={() => goIndex(1)}
                    >
                        next
                    </i>

                    <div className="picture-preview-toolbar">
                        <div className="picture-preview-toolbar-title">3/3</div>
                        <div className="toolbarCon">
                            <i className="picture-equal icon"></i>
                            <i className="picture-fullscreen icon"></i>
                            <i className="picture-enlarge icon"></i>
                            <i className="picture-micrify icon"></i>
                            <i className="picture-rotate icon"></i>
                            <i className="picture-download icon"></i>
                        </div>
                    </div>
                </PicturePreviewStyle>
            </Protal>
        </>
    );
};

PicturePreview.defaultProps = {
    prefixCls: 'za-picture-preview',
    toolbar: false,
    source: [],
    draggable: false,
    esc: true,
    mask: true,
    progress: false,
    visible: false,
    activeIndex: 0,
    onClose: () => {},
};

export default PicturePreview;
