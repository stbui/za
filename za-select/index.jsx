import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RcSelect, { Option, OptGroup } from 'rc-select';

export const Select = props => {
  const { prefixCls, className, size, showArrow } = props;

  return <RcSelect classNames={classes} {...props} />;
};

Select.defaultProps = {
  prefixCls: 'za-select'
};

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
