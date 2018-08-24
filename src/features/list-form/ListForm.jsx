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
    this.currentList = this.props.lists.find(list => list.id === this.props.listId);
    this.state = {
      listNameText: this.currentList ? this.currentList.title : '',
      checklist: this.currentList ? this.currentList.isChecklist : false,
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
        id: this.currentList.id,
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
        deleting: false,
        items: [],
      });
    }
  }

  render() {
    return (
      <div className="list-form">
        { this.currentList &&
          <ListTitle
            id={this.currentList.id}
            title={this.currentList.title}
            count={this.currentList.items.length}
            click={() => this.props.showListForm(false)}
          />
        }
        <div className="form-section">
          <input
            type="text"
            placeholder={LABELS.LIST_NAME}
            ref={this.listNameField}
            onChange={this.listNameChange}
            value={this.state.listNameText}
          />
        </div>
        {/*<div className="form-section">
          <p>{LABELS.LIST_COLOR}</p>
          <div className="swatches">
            { COLORS.map(color => (
              <div className="color" style={{ background: color }} key={color} />
            ))}
          </div>
        </div>*/}
        <div className="form-section">
          <button
            className={`checkbox${this.state.checklist ? ' checked' : ''}`}
            onClick={() => this.setState({ checklist: !this.state.checklist })}
          >
            <div className="checkbox-dot" />
            <span>{LABELS.MAKE_CHECKLIST}</span>
          </button>
        </div>
        <div className="form-footer">
          <Button
            label={LABELS.CANCEL}
            classes="cancel"
            click={() => this.props.showListForm(false)}
          />
          <Button
            label={this.currentList ? LABELS.APPLY_CHANGES : LABELS.CREATE_LIST}
            classes="confirm"
            click={this.submitList}
            disabled={this.state.listNameText.length === 0}
          />
        </div>
      </div>
    );
  }
}

ListForm.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape(PROPS.LIST)).isRequired,
  showListForm: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
  listId: PropTypes.string,
};

ListForm.defaultProps = {
  listId: undefined,
};

export default ListForm;
