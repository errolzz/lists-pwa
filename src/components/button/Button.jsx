import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, click, data }) => (
  <button onClick={() => click(data)}>
    <span>{ label }</span>
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  click: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.string,
  }),
};

Button.defaultProps = {
  label: undefined,
  click: undefined,
  data: undefined,
};

export default Button;
