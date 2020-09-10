import styled from 'styled-components';

export interface FlexBoxProps {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    margin?: any;
    justifyContent?: any;
    alignItems?: any;
    stretchToFitWidth?: any;
    stretchToFitHeight?: any;
}

const FlexBoxRoot = styled.div<FlexBoxProps>`
    display: flex;
    flex-wrap: nowrap;

    flex-direction: ${props => props.direction};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`;

export default FlexBoxRoot;
