import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Input = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Input.defaultProps = {
  prefixCls: 'za-input'
};

export default Input;
