import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import classNames from 'classnames';
import RcSelect, { Option, OptGroup } from 'rc-select';

const GlobalStyle = createGlobalStyle`
.za-select-dropdown {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  list-style: none;
  font-size: 14px;
  color: #343434;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.za-select-dropdown-menu {
  max-height: 250px;
  margin-bottom: 0;
  padding-left: 0;
  overflow: auto;
  list-style: none;
  outline: none;
}

.za-select-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 5px 12px;
  overflow: hidden;
  color: #343434;
  font-weight: normal;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background 0.3s ease;
}

.za-select-dropdown-menu-item:first-child {
  border-radius: 4px 4px 0 0;
}

.za-select-dropdown-menu-item:hover:not(.za-select-dropdown-menu-item-disabled) {
  background-color: #e3fcee;
}`;

const Container = styled(RcSelect)``;

export const Select = (props) => {
  const { prefixCls, className, size, showArrow } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container {...props} />
    </React.Fragment>
  );
};

Select.defaultProps = {
  prefixCls: 'za-select',
};

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
