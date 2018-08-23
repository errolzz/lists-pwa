import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS } from '../../constants/constants';
import './List.css';

const List = ({
  data,
  addItem,
  closeList,
}) => (
  <div>
    <ListTitle
      title={data.title}
      count={data.items.length}
      click={closeList}
    />
  </div>
);

List.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    isChecklist: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool,
    })),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
};

export default List;
