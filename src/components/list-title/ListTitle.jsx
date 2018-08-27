import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './ListTitle.css';

const ListTitle = ({
  id,
  disabled,
  title,
  count,
  titleClick,
  actionLabel,
  actionClick,
}) => (
  <div className="list-title">
    <Button
      label={`${title} ... ${count}`}
      click={data => titleClick(data.id)}
      data={{ id }}
      classes="title-button"
      disabled={disabled}
    />
    { actionLabel &&
      <Button
        label={actionLabel}
        click={data => actionClick(data.id)}
        data={{ id }}
        classes="action-button"
        disabled={disabled}
      />
    }
  </div>
);

ListTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  actionLabel: PropTypes.string,
  titleClick: PropTypes.func,
  actionClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ListTitle.defaultProps = {
  actionLabel: undefined,
  titleClick: undefined,
  actionClick: undefined,
  disabled: false,
};

export default ListTitle;
