import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RcDrawer from 'rc-drawer';

export const Drawer = (props) => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <RcDrawer classNames={classes} {...props} />;
};

Drawer.defaultProps = {
  prefixCls: 'za-drawer',
};

export default Drawer;
