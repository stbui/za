import { useEffect, useRef, useState } from 'react';

export const IMAGE_STATUS = {
    PENDING: 'pending',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed',
};

export const useImage = ({ src, onLoad, onError }) => {
    const [status, setStatus] = useState(
        src ? IMAGE_STATUS.LOADING : IMAGE_STATUS.PENDING
    );
    const ref: any = useRef();

    const handleLoad = event => {
        onLoad && onLoad();
        setStatus(IMAGE_STATUS.LOADED);
    };

    const handleError = event => {
        onError && onError();
        setStatus(IMAGE_STATUS.FAILED);
    };

    const createLoader = () => {
        destroyLoader();

        ref.current = new Image();
        ref.current.onload = handleLoad;
        ref.current.onerror = handleError;
        ref.current.src = src;
    };

    const destroyLoader = () => {
        if (ref.current) {
            ref.current.onload = null;
            ref.current.onerror = null;
            ref.current = null;
        }
    };

    useEffect(() => {
        createLoader();
    }, []);

    return status;
};

export default useImage;
