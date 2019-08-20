import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const CheckBox = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

CheckBox.defaultProps = {
  prefixCls: 'za-checkbox'
};

export default CheckBox;
