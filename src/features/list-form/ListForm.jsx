import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS } from '../../constants/constants';
import { getUniqueId } from '../../utils';
import './ListForm.css';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.listNameField = React.createRef();
    this.listNameChange = this.listNameChange.bind(this);
    this.submitList = this.submitList.bind(this);
    this.confirmDeleteList = this.confirmDeleteList.bind(this);
    this.currentList = this.props.lists.find(list => list.id === this.props.listId);
    this.state = {
      listNameText: this.currentList ? this.currentList.title : '',
      checklist: this.currentList ? this.currentList.isChecklist : false,
      deleting: false,
    };
  }

  listNameChange() {
    this.setState({
      listNameText: this.listNameField.current.value,
    });
  }

  submitList() {
    if (this.currentList) {
      this.props.updateList({
        id: this.props.listId,
        title: this.state.listNameText,
        color: this.state.color,
        isChecklist: this.state.checklist,
      });
    } else {
      this.props.createList({
        id: getUniqueId(),
        title: this.state.listNameText,
        color: this.state.color,
        isChecklist: this.state.checklist,
        items: [],
      });
    }
  }

  confirmDeleteList() {
    this.props.deleteList(this.props.listId);
    this.setState({
      deleting: false,
    });
  }

  render() {
    return (
      <div className="list-form">
        { this.currentList &&
          <ListTitle
            id={this.props.listId}
            title={this.currentList.title}
            count={this.currentList.items.length}
            titleClick={() => this.props.showListForm(false)}
            actionLabel={LABELS.CANCEL}
            actionClick={() => this.props.showListForm(false)}
          />
        }
        { !this.currentList &&
          <ListTitle
            id={this.props.listId}
            title={LABELS.MAKE_NEW}
            titleClick={() => this.props.showListForm(false)}
            actionLabel={LABELS.CANCEL}
            actionClick={() => this.props.showListForm(false)}
          />
        }
        <div className="form-section">
          { this.currentList &&
            <p>{LABELS.EDIT_NAME}</p>
          }
          <input
            type="text"
            placeholder={LABELS.LIST_NAME}
            ref={this.listNameField}
            onChange={this.listNameChange}
            value={this.state.listNameText}
          />
        </div>
        <div className="form-section">
          <button
            className={`checkbox${this.state.checklist ? ' checked' : ''}`}
            onTouchStart={() => this.setState({ checklist: !this.state.checklist })}
          >
            <div className="checkbox-dot" />
            <span>{LABELS.MAKE_CHECKLIST}</span>
          </button>
        </div>
        <div className="form-footer">
          <Button
            label={this.currentList ? LABELS.APPLY_CHANGES : LABELS.CREATE_LIST}
            classes="create-button"
            click={this.submitList}
            disabled={this.state.listNameText.length === 0}
          />
        </div>
        { this.currentList &&
          <div>
            { !this.state.deleting &&
              <div className="form-section delete-list">
                <Button
                  label={LABELS.DELETE_LIST}
                  click={() => this.setState({ deleting: true })}
                  classes="delete"
                />
              </div>
            }
            { this.state.deleting &&
              <div className="form-section delete-list">
                <p>{LABELS.CONFIRM_DELETE}</p>
                <Button
                  label={LABELS.NO}
                  click={this.confirmDeleteList}
                  classes="cancel-delete"
                />
                <Button
                  label={LABELS.YES}
                  click={() => this.props.deleteList(this.props.listId)}
                  classes="confirm-delete"
                />
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

ListForm.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape(PROPS.LIST)).isRequired,
  showListForm: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  listId: PropTypes.string,
};

ListForm.defaultProps = {
  listId: undefined,
};

export default ListForm;
