import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';

const More = ({ destroyed, smash }) => {
  const classes = 'more';

  return (
    <div className={classes}>
      <Button label="DESTROY!" click={smash} />
      {destroyed &&
        <p>AM DESTROYED...</p>
      }
    </div>
  );
};

More.propTypes = {
  destroyed: PropTypes.bool.isRequired,
  smash: PropTypes.func.isRequired,
};

export default More;
