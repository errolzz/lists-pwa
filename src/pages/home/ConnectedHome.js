import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadLists, showList, createList } from '../../redux/lists';
import Home from './Home';

// maps the redux state to this components props
const mapStateToProps = state => ({
  lists: state.lists.lists,
  isLoading: state.lists.isLoading,
  creatingList: state.lists.creatingList,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  loadLists: bindActionCreators(loadLists, dispatch),
  showList: bindActionCreators(showList, dispatch),
  createList: bindActionCreators(createList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
