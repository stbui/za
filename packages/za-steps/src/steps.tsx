import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0;
    width: 100%;
    display: flex;
`;

export const Steps = props => {
    const { children, initial, progressDot, icons, current, status, ...other } =
        props;

    return (
        <Root className="steps-horizontal steps-label-horizontal">
            {React.Children.map(children, (child, index) => {
                if (!child) {
                    return null;
                }

                const stepNumber = initial + index;

                const childProps = {
                    stepNumber: `${stepNumber + 1}`,
                    progressDot,
                    icons,
                    ...child.props,
                };

                if (!child.props.status) {
                    if (stepNumber === current) {
                        childProps.status = status;
                    } else if (stepNumber < current) {
                        childProps.status = 'finish';
                    } else {
                        childProps.status = 'wait';
                    }
                }
                console.log(stepNumber, current, childProps.status);

                return React.cloneElement(child, childProps);
            })}
        </Root>
    );
};

Steps.defaultProps = {
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    initial: 0,
    current: 0,
    status: 'process',
    size: '',
    progressDot: false,
};

export default Steps;
