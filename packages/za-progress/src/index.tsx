import React from 'react';
import { themes } from '@stbui/za-theme';
import { ProgressStyle } from './style';
import { CircleProgress } from './circle';

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressSize = 'default' | 'small';

export interface ProgressProps {
    prefixCls?: string;
    className?: string;
    message?: string;
    extraContent?: React.ReactNode | null;
    operation?: React.ReactNode | null;
    type?: ProgressType;
    percent?: number;
    successPercent?: number;
    format?: (percent?: number, successPercent?: number) => string;
    status?: 'success' | 'active' | 'exception';
    showInfo?: boolean;
    strokeWidth?: number;
    strokeLinecap?: string;
    strokeColor?: string;
    trailColor?: string;
    width?: number;
    style?: React.CSSProperties;
    gapDegree?: number;
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';
    size?: ProgressSize;
}

const validProgress = (progress: number | undefined) => {
    if (!progress || progress < 0) {
        return 0;
    } else if (progress > 100) {
        return 100;
    }

    return progress;
};

export const Progress: React.FC<ProgressProps> = props => {
    const { percent } = props;

    const width = validProgress(percent);

    return (
        <ProgressStyle width={width} {...props}>
            <div className="progress-line-ctner">
                <div className="progress-basic">
                    <div className="progress-outer">
                        <div className="progress-inner">
                            <div className="progress-bg"></div>
                        </div>
                    </div>
                    <span className="progress-text">{percent}%</span>
                </div>
            </div>
        </ProgressStyle>
    );
};

Progress.defaultProps = {
    theme: themes.default,
};

export { CircleProgress };

export default Progress;
