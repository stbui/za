import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Alert = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Alert.defaultProps = {
  prefixCls: 'za-alert'
};

export default Alert;
