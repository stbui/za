import styled, { css } from 'styled-components';
import { themes } from '@stbui/za-theme';

const HeaderStyle = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    background: #001529;
    padding: 0 50px;
    height: 60px;
    line-height: 60px;
`;
HeaderStyle.defaultProps = {
    className: 'za-layout-header',
};

export default HeaderStyle;
