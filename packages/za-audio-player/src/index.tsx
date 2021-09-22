import React from 'react';
import { AudioPlayerStyle } from './style';

export interface AudioPlayerProps {
    className?: string;
    controlVolume?: boolean;
    controlProgress?: boolean;
    displayTime?: boolean;
    download?: boolean;
    src: string;
    title?: string;
    size?: 'default' | 'small';

    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: 'auto' | 'metadata' | 'none';
    volume?: number;
    rateOptions?: {
        value?: number;
        suffix?: string;
        decimal?: number;
        range?: number[];
    };
    onAbort?: () => void;
    onCanPlay?: () => void;
    onCanPlayThrough?: () => void;
    onEnded?: () => void;
    onError?: () => void;
    onLoadedMetadata?: () => void;
    onPause?: () => void;
    onPlay?: () => void;
    onSeeked?: () => void;
}

export const AudioPlayer = props => {
    const { src, ...other } = props;

    return (
        <AudioPlayerStyle {...other}>
            <div className="audio-player-wrap" title="这是一个demo">
                <div className="audio-box">
                    <audio src={src} preload="metadata">
                        您的浏览器不支持 audio 标签。
                    </audio>
                </div>
                <div className="box pause-play-box pause-play-box-enable">
                    <i className="play handle-audio-icon pause-play"></i>
                </div>
                <div className="box step-box">
                    <div className="slider">
                        <div className="slider-all-handle"></div>
                        <div className="slider-rail"></div>
                        <div className="slider-track"></div>
                        <div className="slider-step"></div>
                        <div role="slider" className="slider-handle"></div>
                        <div className="slider-mark"></div>
                    </div>
                </div>
                <div className="box time-box">
                    <span className="current">0:00 / 0:14</span>
                </div>
                <div className="box volume-box">
                    <i className="sound-loud handle-audio-icon control-volume"></i>
                </div>
            </div>
        </AudioPlayerStyle>
    );
};

AudioPlayer.defaultProps = {
    className: 'za-audio-player',
    size: 'default',
    title: '',
    src: '',
    loop: false,
    preload: 'metadata',
    autoPlay: false,
    muted: false,
    volume: 1.0,
    controlVolume: true,
    controlProgress: true,
    displayTime: true,
    rateOptions: { value: 0 },
    download: false,
    onLoadedMetadata: () => {}, // 当浏览器已加载音频的元数据时的回调
    onCanPlay: () => {}, // 当浏览器能够开始播放音频时的回调
    onCanPlayThrough: () => {}, // 当浏览器可在不因缓冲而停顿的情况下进行播放时的回调
    onAbort: () => {}, // 当音频的加载已放弃时(如切换到其他资源)的回调
    onEnded: () => {}, // 当目前的播放列表已结束时的回调
    onError: () => {}, // 当在音频加载期间发生错误时的回调
    onPause: () => {}, // 当音频暂停时的回调
    onPlay: () => {}, // 当音频已开始或不再暂停时的回调
    onSeeked: () => {}, // 当用户已移动/跳跃到音频中的新位置时的回调
};

export default AudioPlayer;
