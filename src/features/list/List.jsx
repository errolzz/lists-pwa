import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS } from '../../constants/constants';
import './List.css';

const List = ({
  listData,
  addItem,
  showDeleteItem,
  deleteItem,
  toggleItem,
  toggleAllItems,
  closeList,
}) => (
  <div>
    <ListTitle
      title={listData.title}
      count={listData.items.length}
      click={closeList}
    />
    <ul>
      { listData.items.map(item => (
        <li className="list-item">
          { listData.isChecklist &&
            <button
              className={`checkbox${item.done ? ' done' : ''}`}
              onClick={() => toggleItem(listData.id, item.id)}
            />
          }
          <span>{item.title}</span>
          { !item.deleting &&
            <Button
              label={LABELS.DELETE_X}
              classes="subtle"
              click={() => showDeleteItem(listData.id, item.id)}
            />
          }
          { item.deleting &&
            <Button
              label={LABELS.DELETE}
              click={() => deleteItem(listData.id, item.id)}
            />
          }
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  listData: PropTypes.shape(PROPS.LIST).isRequired,
  addItem: PropTypes.func.isRequired,
  showDeleteItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  toggleAllItems: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
};

export default List;
