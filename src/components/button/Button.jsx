import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  label,
  click,
  disabled,
  data,
  classes,
}) => (
  <button
    className={classes}
    disabled={disabled}
    onTouchStart={() => click(data)}
  >
    <span>{ label }</span>
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  click: PropTypes.func,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
  }),
};

Button.defaultProps = {
  label: undefined,
  click: undefined,
  classes: undefined,
  disabled: false,
  data: undefined,
};

export default Button;
