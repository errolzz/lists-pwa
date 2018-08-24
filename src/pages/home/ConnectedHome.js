import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showList,
  showListForm,
  createList,
} from '../../redux/lists';
import Home from './Home';

// maps the redux state to this components props
const mapStateToProps = state => ({
  lists: state.lists.lists,
  listId: state.lists.listId,
  creatingList: state.lists.creatingList,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  showList: bindActionCreators(showList, dispatch),
  showListForm: bindActionCreators(showListForm, dispatch),
  createList: bindActionCreators(createList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
