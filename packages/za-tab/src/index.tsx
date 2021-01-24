import styled from 'styled-components';

export interface TabProps {
    show?: boolean;
}

const TabRoot = styled.div<TabProps>`
    display: ${props => (props.show ? 'block' : 'none')};
`;

TabRoot.defaultProps = {
    show: true,
};

export default TabRoot;
