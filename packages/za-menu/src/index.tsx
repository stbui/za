import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Menu = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Menu.defaultProps = {
  prefixCls: 'za-menu'
};

export default Menu;
