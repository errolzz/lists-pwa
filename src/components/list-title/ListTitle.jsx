import React from 'react';
import PropTypes from 'prop-types';
import './ListTitle.css';

const ListTitle = ({
  id,
  disabled,
  title,
  count,
  click,
}) => (
  <button className="list-title" disabled={disabled} onClick={() => click(id)}>
    <span className="title">{ title }</span>
    <span className="count">{ count }</span>
  </button>
);

ListTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  click: PropTypes.func,
  disabled: PropTypes.bool,
};

ListTitle.defaultProps = {
  click: undefined,
  disabled: false,
};

export default ListTitle;
