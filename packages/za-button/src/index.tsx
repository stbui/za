import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = props => {
  const { prefixCls, className, type, shape, sizeCls, loading, ghost } = props;
  const classes = classNames({}, className);

  return <button className={classes} />;
};

Button.defaultProps = {
  prefixCls: 'za-button'
};

export default Button;
