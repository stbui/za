import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Tag = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Tag.defaultProps = {
  prefixCls: 'za-tag'
};

export default Tag;
