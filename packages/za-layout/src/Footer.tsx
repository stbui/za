import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

const FooterStyle = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    background: #f0f2f5;
    padding: 24px 50px;
    color: #333;
    font-size: 14px;
`;
FooterStyle.defaultProps = {
    className: 'za-layout-footer',
};

export default FooterStyle;
