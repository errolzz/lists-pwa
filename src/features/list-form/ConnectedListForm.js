import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showListForm,
  createList,
  updateList,
  deleteList,
} from '../../redux/lists';
import ListForm from './ListForm';

// maps the redux state to this components props
const mapStateToProps = state => ({
  lists: state.lists.lists,
  listId: state.lists.listId,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  showListForm: bindActionCreators(showListForm, dispatch),
  createList: bindActionCreators(createList, dispatch),
  updateList: bindActionCreators(updateList, dispatch),
  deleteList: bindActionCreators(deleteList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
