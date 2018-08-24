import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS } from '../../constants/constants';
import { getUniqueId } from '../../utils';
import './List.css';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.newItemField = React.createRef();
    this.newItemChange = this.newItemChange.bind(this);
    this.clearAddItem = this.clearAddItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.state = {
      newItemText: '',
    };
  }

  newItemChange() {
    this.setState({
      newItemText: this.newItemField.current.value,
    });
  }

  clearAddItem() {
    this.setState({
      newItemText: '',
    });
  }

  addNewItem() {
    const newItem = {
      id: getUniqueId(),
      title: this.state.newItemText,
      done: false,
      deleting: false,
    };
    this.props.addItem(this.props.listId, newItem);
    this.clearAddItem();
  }

  render() {
    const currentList = this.props.lists.find(list => list.id === this.props.listId);
    return (
      <div>
        <ListTitle
          id={currentList.id}
          title={currentList.title}
          count={currentList.items.length}
          click={this.props.closeList}
        />
        <div className="list-scroller">
          <ul>
            { currentList.items.map(item => (
              <li key={item.id} className="list-item">
                { currentList.isChecklist &&
                  <button
                    className={`checkbox${item.done ? ' checked' : ''}`}
                    onClick={() => this.props.toggleItem(currentList.id, item.id)}
                  />
                }
                <span>{item.title}</span>
                { !item.deleting &&
                  <Button
                    label={LABELS.DELETE_X}
                    classes="subtle"
                    click={() => this.props.showDeleteItem(currentList.id, item.id)}
                  />
                }
                { item.deleting &&
                  <div>
                    <Button
                      label={LABELS.CANCEL}
                      click={() => this.props.showDeleteItem(currentList.id, item.id)}
                    />
                    <Button
                      label={LABELS.DELETE}
                      click={() => this.props.deleteItem(currentList.id, item.id)}
                    />
                  </div>
                }
              </li>
            ))}
          </ul>
          { currentList.isChecklist &&
            <Button
              label={LABELS.RESET}
              click={() => this.props.toggleAllItems(currentList.id, false)}
            />
          }
        </div>
        <div className="add-item-field">
          <input
            type="text"
            placeholder={LABELS.ADD_ITEM}
            ref={this.newItemField}
            onChange={this.newItemChange}
            value={this.state.newItemText}
          />
          <Button
            label={LABELS.ADD_ITEM_ICON}
            click={this.clearAddItem}
            classes={`clear-add-item${this.state.newItemText.length > 0 ? ' clear' : ''}`}
          />
          <Button
            label={LABELS.ADD_ITEM_ICON}
            click={this.addNewItem}
            classes="confirm-add-item"
            disabled={this.state.newItemText.length === 0}
          />
        </div>
        <div className="list-controls">
          { !currentList.deleting &&
            <div>
              <Button
                label={LABELS.DELETE_LIST}
                click={() => this.props.showDeleteList(currentList.id, true)}
                classes="delete"
              />
              <Button
                label={LABELS.EDIT}
                click={() => this.props.showListForm(true)}
              />
            </div>
          }
          { currentList.deleting &&
            <div>
              <span>{LABELS.CONFIRM_DELETE}</span>
              <Button
                label={LABELS.NO}
                click={() => this.props.showDeleteList(currentList.id, false)}
              />
              <Button
                label={LABELS.YES}
                click={() => this.props.deleteList(currentList.id)}
                classes="delete"
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

List.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape(PROPS.LIST)).isRequired,
  listId: PropTypes.string.isRequired,
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
