import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS } from '../../constants/constants';
import './List.css';

const List = ({
  listData,
  addItem,
  showListForm,
  showDeleteItem,
  deleteList,
  showDeleteList,
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
    <div className="list-scroller">
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
      <Button
        label={LABELS.RESET}
        click={() => toggleAllItems(false)}
      />
    </div>
    <div className="add-item-field">
      <input type="text" placeholder={LABELS.ADD_ITEM} />
      <button
        onClick={/* START HERE */}
        className="add-item-icon"
      />
      <button
        onClick={() => addItem(listData.id, {})}
        className="confirm-add-item-icon"
      />
    </div>
    <div className="list-controls">
      { !listData.deleting &&
        <div>
          <Button
            label={LABELS.DELETE}
            click={() => showDeleteList(listData.id, true)}
            classes="delete"
          />
          <Button
            label={LABELS.EDIT}
            click={() => showListForm(true)}
          />
        </div>
      }
      { listData.deleting &&
        <div>
          <span>{LABELS.CONFIRM_DELETE}</span>
          <Button
            label={LABELS.NO}
            click={() => showDeleteList(listData.id, false)}
          />
          <Button
            label={LABELS.YES}
            click={() => deleteList(listData.id, false)}
            classes="delete"
          />
        </div>
      }
    </div>
  </div>
);

List.propTypes = {
  listData: PropTypes.shape(PROPS.LIST).isRequired,
  addItem: PropTypes.func.isRequired,
  showListForm: PropTypes.func.isRequired,
  showDeleteList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  showDeleteItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  toggleAllItems: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
};

export default List;
