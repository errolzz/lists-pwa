import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, click, data, classes }) => (
  <button className={classes} onClick={() => click(data)}>
    <span>{ label }</span>
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  click: PropTypes.func,
  classes: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
  }),
};

Button.defaultProps = {
  label: undefined,
  click: undefined,
  classes: undefined,
  data: undefined,
};

export default Button;
