import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import { LABELS, PROPS, COLORS } from '../../constants/constants';
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
    };
  }

  listNameChange() {
    this.setState({
      listNameText: this.listNameField.current.value,
    });
  }

  submitList() {
    if (this.currentList) {
      this.props.updateList();
    } else {
      this.props.createList();
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
          <p>{LABELS.LIST_NAME}</p>
          <input
            type="text"
            onChange={this.listNameChange}
            value={this.state.listNameText}
          />
        </div>
        <div className="form-section">
          <p>{LABELS.LIST_COLOR}</p>
          <div className="swatches">
            { COLORS.map(color => (
              <div className="color" style={{ background: color }} key={color} />
            ))}
          </div>
        </div>
        <div className="form-section">
          <p>{LABELS.MAKE_CHECKLIST}</p>
        </div>
        <div className="form-footer">
          <Button
            label={LABELS.CANCEL}
            click={() => this.props.showListForm(false)}
          />
          <Button
            label={this.currentList ? LABELS.APPLY_CHANGES : LABELS.CREATE_LIST}
            click={this.submitList}
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
