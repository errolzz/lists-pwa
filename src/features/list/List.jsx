import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS } from '../../constants/constants';
import { getUniqueId, canBeReset } from '../../utils';
import './List.css';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.newItemField = React.createRef();
    this.newItemChange = this.newItemChange.bind(this);
    this.clearAddItem = this.clearAddItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.editList = this.editList.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.itemPress = this.itemPress.bind(this);
    this.itemRelease = this.itemRelease.bind(this);
    this.state = {
      movingItem: undefined,
      movingIndex: undefined,
      newItemText: '',
    };
  }

  getItemClasses(currentList, item) {
    let classes = 'list-item';
    if (currentList.isChecklist) classes += ' with-check';
    if (this.state.movingItem === item.id) classes += ' moving';
    return classes;
  }

  newItemChange() {
    this.setState({
      newItemText: this.newItemField.current.value,
    });
  }

  keyUp(e) {
    if (e.keyCode === 13) this.addNewItem();
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

  editList() {
    this.props.showListForm(true);
  }

  itemPress(itemId, itemIndex) {
    this.pressTimer = setTimeout(() => {
      this.setState({
        moveItemSelected: true,
        movingItem: itemId,
        movingIndex: itemIndex,
      });
    }, 666);
  }

  itemRelease(index) {
    clearTimeout(this.pressTimer);

    if (!this.state.moveItemSelected && this.state.movingItem) {
      this.props.moveItem(this.props.listId, this.state.movingIndex, index);
      this.setState({
        movingItem: undefined,
        movingIndex: undefined,
      });
    }

    if (this.state.moveItemSelected) {
      this.setState({
        moveItemSelected: false,
      });
    }
  }

  render() {
    const currentList = this.props.lists.find(list => list.id === this.props.listId);
    return (
      <div className="list">
        <ListTitle
          id={currentList.id}
          title={currentList.title}
          count={currentList.items.length}
          titleClick={this.props.closeList}
          actionLabel={LABELS.EDIT}
          actionClick={this.editList}
        />
        <div className="list-scroller">
          <ul className={this.state.movingItem ? 'moving-item' : ''}>
            { currentList.items.map((item, index) => (
              <li
                key={item.id}
                className={this.getItemClasses(currentList, item, index)}
              >
                { currentList.isChecklist &&
                  <button
                    className={`checkbox${item.done ? ' checked' : ''}`}
                    onTouchStart={() => this.props.toggleItem(currentList.id, item.id)}
                  >
                    <div className="checkbox-dot" />
                  </button>
                }
                <button
                  className="item-title"
                  type="button"
                  onTouchStart={() => this.itemPress(item.id, index)}
                  onTouchEnd={() => this.itemRelease(index)}
                >
                  <span>{item.title}</span>
                </button>
                <Button
                  label={LABELS.DELETE_X}
                  classes="remove-item"
                  click={() => this.props.showDeleteItem(currentList.id, item.id)}
                />
                <div className={`confirm-delete${item.deleting ? ' deleting' : ''}`}>
                  <Button
                    label={LABELS.DELETE}
                    classes="confirm"
                    click={() => this.props.deleteItem(currentList.id, item.id)}
                  />
                  <Button
                    label={LABELS.CANCEL}
                    classes="cancel"
                    click={() => this.props.showDeleteItem(currentList.id, item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          { currentList.isChecklist && canBeReset(currentList) &&
            <Button
              label={LABELS.RESET}
              click={() => this.props.toggleAllItems(currentList.id, false)}
              classes="reset-list"
            />
          }
        </div>
        <div className="add-item-field">
          <input
            type="text"
            placeholder={LABELS.ADD_ITEM}
            autoComplete="off"
            ref={this.newItemField}
            onChange={this.newItemChange}
            onKeyUp={this.keyUp}
            value={this.state.newItemText}
          />
          <Button
            label={LABELS.ADD_ITEM_ICON}
            click={this.clearAddItem}
            classes={`clear-add-item${this.state.newItemText.length > 0 ? ' clear' : ''}`}
          />
          { this.state.newItemText.length > 0 &&
            <Button
              label={LABELS.ADD_ITEM_ICON}
              click={this.addNewItem}
              classes="confirm-add-item"
            />
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
  showDeleteItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  toggleAllItems: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
};

export default List;
