import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createList,
  updateList,
} from '../../redux/lists';
import ListForm from './ListForm';

// maps the redux state to this components props
const mapStateToProps = state => ({
  lists: state.lists.lists,
  isLoading: state.lists.isLoading,
  creatingList: state.lists.creatingList,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  createList: bindActionCreators(createList, dispatch),
  updateList: bindActionCreators(updateList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
