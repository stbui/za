import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Table = props => {
  const { prefixCls, className } = props;
  const classes = classNames({}, className);
};

Table.defaultProps = {
  prefixCls: 'za-table'
};

export default Table;
