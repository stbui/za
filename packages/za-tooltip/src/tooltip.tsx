import React, {
    useMemo,
    cloneElement,
    useRef,
    isValidElement,
    useState,
} from 'react';
import useClickAway from '@stbui/za-use-click-away';
import TooltipPortal from './tooltip-portal';
import { getRect } from './helper';

export type TooltipIconOffset = {
    x: string;
    y: string;
};

export const Tooltip = props => {
    const {
        title,
        children,
        offset,
        defaultVisible,
        trigger,
        enterDelay,
        leaveDelay,
        onVisibleChange,
    } = props;
    const [visible, setVisible] = useState<boolean>(defaultVisible);

    const ref = useRef<HTMLDivElement>(null);
    const timer = useRef<number>();

    const iconOffset = useMemo<TooltipIconOffset>(() => {
        if (!ref?.current) return { x: '0.75em', y: '0.75em' };
        const rect = getRect(ref);
        return {
            x: `${rect.width ? rect.width / 2 : 0}px`,
            y: `${rect.height ? rect.height / 2 : 0}px`,
        };
    }, [ref?.current]);

    const child = cloneElement(children, { ref });

    const wrapper = isValidElement(children) ? (
        child
    ) : (
        <span ref={ref}>{children}</span>
    );

    const changeVisible = (nextState: boolean) => {
        const clear = () => {
            clearTimeout(timer.current);
            timer.current = undefined;
        };
        const handler = (nextState: boolean) => {
            setVisible(nextState);
            onVisibleChange(nextState);
            clear();
        };
        clear();
        if (nextState) {
            timer.current = window.setTimeout(() => handler(true), enterDelay);
            return;
        }
        const leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay;
        timer.current = window.setTimeout(
            () => handler(false),
            leaveDelayWithoutClick
        );
    };

    const clickEventHandler = () =>
        trigger === 'click' && changeVisible(!visible);

    useClickAway(ref, () => trigger === 'click' && changeVisible(false));

    return (
        <>
            {wrapper}
            <TooltipPortal
                title={title}
                iconOffset={iconOffset}
                parent={ref}
                offset={offset}
            ></TooltipPortal>
        </>
    );
};

Tooltip.defaultProps = {
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
    offset: 0,
    trigger: 'click',
};

export default Tooltip;
