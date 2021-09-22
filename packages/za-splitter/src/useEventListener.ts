import { useEffect } from 'react';

export const useEventListener = <K extends keyof WindowEventMap>(
    type: K,
    listener?: (this: Window, ev: WindowEventMap[K]) => void
) => {
    useEffect(() => {
        const abortController = new AbortController();
        if (!listener) return;

        window.addEventListener(type, listener);

        return () => {
            window.removeEventListener(type, listener);
            abortController.abort();
        };
    }, [type, listener]);
};
