import React from 'react';
import PropTypes from 'prop-types';
import './ListTitle.css';

const ListTitle = ({
  title, count, click, data,
}) => (
  <button className="list-title" disabled={data.disabled} onClick={() => click(data)}>
    <span className="title">{ title }</span>
    <span className="count">{ count }</span>
  </button>
);

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  click: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.string,
    disabled: PropTypes.bool,
  }),
};

ListTitle.defaultProps = {
  click: undefined,
  data: undefined,
};

export default ListTitle;
