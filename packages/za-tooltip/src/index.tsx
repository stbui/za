import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import RcTooltip from 'rc-tooltip';

export const tooltip = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);

  return <div classNames={classes} prefixCls={prefixCls} {...props} />;
};

tooltip.defaultProps = {
  prefixCls: 'za-tooltip'
};

export default tooltip;
