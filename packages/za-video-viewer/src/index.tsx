import React from 'react';
import styled from 'styled-components';

interface VideoViewerProps {
    prefixCls?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    poster?: string;
    sources?: [];
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: 'auto' | 'none' | 'metadata';
    controls?: boolean;
    download?: boolean;
    downloadSrc?: string;
    bigPlayButton?: boolean;
}

const Root = styled.div``;

export const VideoViewer = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

export const Video = () => <div></div>;

VideoViewer.Video = Video;

VideoViewer.defaultProps = {
    className: 'video-js',
    width: 640, // 视频容器的宽度
    height: 360, // 视频容器的高度
    poster: '', // 播放前显示的视频画面，播放开始之后自动移除。通常传入一个URL
    sources: [], // 资源文件
    autoplay: false, // 播放器准备好之后，是否自动播放
    loop: false, // 视频播放结束后，是否循环播放
    muted: false, // 是否静音
    preload: 'auto', // 预加载('auto' 自动 ’metadata' 元数据信息 ，比如视频长度，尺寸等 'none'  不预加载任何数据，直到用户开始播放才开始下载)
    controls: true, // 是否显示控制条
    download: false, // 是否显示下载按钮
    bigPlayButton: true, // 是否显示大按钮
};

export default VideoViewer;
