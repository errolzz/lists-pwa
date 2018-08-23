import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/button';
import { LABELS } from '../../constants/constants';
import './ListItem.css';

const ListItem = ({
  title,
  click,
  isChecklist,
  done,
  deleting,
}) => (
  <li className="list-item">
    { isChecklist &&
      <div className={`checklist${done ? ' done' : ''}`} />
    }
    <span>{title}</span>
    { deleting &&
      <Button
        label={ LABELS.DELETE }
      />
    }
  </li>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  isChecklist: PropTypes.bool,
  done: PropTypes.bool,
  deleting: PropTypes.bool,
};

ListItem.defaultProps = {
  isChecklist: false,
  done: false,
  deleting: false,
};

export default ListItem;
