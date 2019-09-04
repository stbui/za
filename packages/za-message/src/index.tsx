import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Message = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Message.defaultProps = {
  prefixCls: 'za-message'
};

export default Message;
