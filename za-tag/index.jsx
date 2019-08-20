import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Badge = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Badge.defaultProps = {
  prefixCls: 'za-badge'
};

export default Badge;
