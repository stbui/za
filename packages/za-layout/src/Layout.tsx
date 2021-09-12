import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

const LayoutStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f0f2f5;
`;

LayoutStyle.defaultProps = {
    className: 'za-layout',
};

export default LayoutStyle;
