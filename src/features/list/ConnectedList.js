import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  closeList,
  addItem,
  moveItem,
  showDeleteItem,
  showListForm,
  deleteList,
  deleteItem,
  toggleItem,
  toggleAllItems,
} from '../../redux/lists';
import List from './List';

// maps the redux state to this components props
const mapStateToProps = state => ({
  listId: state.lists.listId,
  lists: state.lists.lists,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  closeList: bindActionCreators(closeList, dispatch),
  showListForm: bindActionCreators(showListForm, dispatch),
  deleteList: bindActionCreators(deleteList, dispatch),
  showDeleteItem: bindActionCreators(showDeleteItem, dispatch),
  deleteItem: bindActionCreators(deleteItem, dispatch),
  addItem: bindActionCreators(addItem, dispatch),
  moveItem: bindActionCreators(moveItem, dispatch),
  toggleItem: bindActionCreators(toggleItem, dispatch),
  toggleAllItems: bindActionCreators(toggleAllItems, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
