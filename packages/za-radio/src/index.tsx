import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Radio = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Radio.defaultProps = {
  prefixCls: 'za-radio'
};

export default Radio;
