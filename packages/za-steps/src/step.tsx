import React from 'react';
import styled, { css } from 'styled-components';

export interface StepProps {
    description?: string | React.ReactNode;
    icon?: React.ReactNode;
    status?: string;
    title?: string | React.ReactNode;

    className?: string;
    prefixCls?: string;
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    itemWidth?: number | string;
    iconPrefix?: string;
    adjustMarginRight?: number | string;
    stepNumber?: number;
    progressDot?:
        | boolean
        | ((content: React.ReactNode, options: object) => React.ReactNode);
    tailContent?: string | React.ReactNode;
    icons?: {
        finish: React.ReactNode;
        error: React.ReactNode;
    };
}

const StepStyle = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    flex: 1;
    overflow: hidden;

    margin-right: 16px;
    white-space: nowrap;

    .steps-item-tail {
        position: absolute;
        left: 0;
        width: 100%;
        top: 12px;
        padding: 0 10px;
    }

    .steps-item-icon {
        display: inline-block;
        vertical-align: top;
        border: 1px solid #999;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 32px;
        font-size: 16px;
        margin-right: 8px;
        transition: background-color 0.3s, border-color 0.3s;
        font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB',
            'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;

        /*  */
        border-color: #337eff;
        background-color: #fff;
    }

    .steps-icon {
        display: inline-block;
        font-style: normal;
        vertical-align: baseline;
        text-align: center;
        text-transform: none;
        line-height: 1;
        text-rendering: optimizeLegibility;

        /*  */
        line-height: 1;
        top: -1px;
        color: #337eff;
        position: relative;
    }

    .steps-item-content {
        display: inline-block;
        vertical-align: top;
    }

    .steps-item-title {
        font-size: 16px;
        color: #333;
        display: inline-block;
        padding-right: 16px;
        position: relative;
        line-height: 32px;
    }

    .steps-item-description {
        color: #666;
        max-width: 140px;
    }

    .steps-item-title {
        font-size: 16px;
        color: #333;
        display: inline-block;
        padding-right: 16px;
        position: relative;
        line-height: 32px;

        &:after {
            content: '';
            height: 1px;
            width: 9999px;
            background: #e9e9e9;
            display: block;
            position: absolute;
            top: 16px;
            left: 100%;

            background-color: #337eff;
        }
    }

    ${({ status }) => {
        switch (status) {
            case 'finish':
                return css`
                    .steps-item-icon {
                        border-color: #337eff;
                        background-color: #fff;
                    }
                    .steps-icon {
                        color: #337eff;
                    }
                    .steps-item-title {
                        color: #333;

                        &:after {
                            background-color: #337eff;
                        }
                    }
                    .steps-item-description {
                        color: #666;
                    }
                `;
            case 'process':
                return css`
                    .steps-item-icon {
                        border-color: #337eff;
                        background: #337eff;
                    }
                    .steps-icon {
                        color: #fff;
                    }
                    .steps-item-title {
                        color: rgba(0, 0, 0, 0.85);
                        font-weight: 500;

                        &:after {
                            background-color: #e9e9e9;
                        }
                    }
                    .steps-item-description {
                        color: #333;
                    }
                `;
            case 'wait':
                return css`
                    .steps-item-icon {
                        border-color: #999;
                        background-color: #fff;
                    }
                    .steps-icon {
                        color: #999;
                    }
                    .steps-item-title {
                        padding-right: 0;
                        color: #666;
                    }
                    .steps-item-description {
                        color: #666;
                        max-width: 140px;
                    }
                `;
        }
    }}
`;

export const Step = props => {
    const { title, description, ...other } = props;

    return (
        <StepStyle>
            <div className="steps-item-tail"></div>
            <div className="steps-item-icon">
                <span className="steps-icon"></span>
            </div>
            <div className="steps-item-content">
                <div className="steps-item-title">{title}</div>
                <div className="steps-item-description">{description}</div>
            </div>
        </StepStyle>
    );
};

Step.defaultProps = {
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    initial: 0,
    current: 0,
    status: 'process',
    progressDot: false,
};

export default Step;
