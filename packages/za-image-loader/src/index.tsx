import React from 'react';
import { ImageLoaderStyle } from './style';
import { useImage, IMAGE_STATUS } from './useImage';

type sizeMap = 'default' | 'small' | 'large';

interface ImageLoaderProps {
    src: string;
    placeholderSize?: sizeMap | object;
    preLoader?: React.ReactNode | (() => React.ReactNode);
    failedLoader?: React.ReactNode | (() => React.ReactNode);
    onLoad?: (event: Event) => void;
    onError?: (error: Error) => void;
    imgProps?: object;
    className?: string;
    style?: React.CSSProperties;
}

const defaultSizeMap = {
    small: {
        width: 90,
        height: 60,
    },
    default: {
        width: 150,
        height: 100,
    },
    large: {
        width: 240,
        height: 160,
    },
};

export const ImageLoader = (props: ImageLoaderProps) => {
    const {
        src,
        onLoad,
        onError,
        placeholderSize,
        preLoader,
        failedLoader,
        ...other
    } = props;
    const status = useImage({ src, onLoad, onError });

    let content;

    switch (status) {
        case IMAGE_STATUS.LOADED:
            content = <img src={src} />;
            break;
        case IMAGE_STATUS.FAILED:
            if (failedLoader) {
                if (typeof failedLoader === 'function') {
                    content = failedLoader();
                } else {
                    content = failedLoader;
                }
            } else {
                content = <div className="image-loader-failed"></div>;
            }
            break;
        default:
            if (preLoader) {
                if (typeof preLoader === 'function') {
                    content = preLoader();
                } else {
                    content = preLoader;
                }
            } else {
                content = <div className="image-loader-preload"></div>;
            }
            break;
    }

    return <ImageLoaderStyle {...other}>{content}</ImageLoaderStyle>;
};

ImageLoader.defaultProps = {
    className: 'za-image-loader',
    placeholderSize: 'default',
    onLoad: () => {},
    onError: () => {},
};

export default ImageLoader;
