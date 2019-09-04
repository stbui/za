import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const Modal = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

Modal.defaultProps = {
  prefixCls: 'za-modal'
};

export default Modal;
