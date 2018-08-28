import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './ListTitle.css';

const ListTitle = ({
  id,
  index,
  disabled,
  title,
  count,
  titleClick,
  actionLabel,
  actionClick,
  onPress,
  onRelease,
  movable,
  allowDrop,
  beingMoved,
}) => (
  <div className={`list-title${allowDrop ? ' allow-drop' : ''}${beingMoved ? ' being-moved' : ''}`}>
    <Button
      label={`${title}${count ? ' (' + count + ')' : ''}`}
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
    { movable &&
      <button
        className="move-button"
        onTouchStart={() => onPress(id, index)}
        onTouchEnd={() => onRelease(index)}
      >
        {allowDrop && !beingMoved ? '+' : '='}
      </button>
    }
  </div>
);

ListTitle.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  actionLabel: PropTypes.string,
  titleClick: PropTypes.func,
  actionClick: PropTypes.func,
  onPress: PropTypes.func,
  onRelease: PropTypes.func,
  movable: PropTypes.bool,
  allowDrop: PropTypes.bool,
  beingMoved: PropTypes.bool,
  disabled: PropTypes.bool,
};

ListTitle.defaultProps = {
  id: undefined,
  index: undefined,
  count: undefined,
  actionLabel: undefined,
  titleClick: undefined,
  actionClick: undefined,
  onPress: undefined,
  onRelease: undefined,
  movable: false,
  allowDrop: false,
  beingMoved: false,
  disabled: false,
};

export default ListTitle;
