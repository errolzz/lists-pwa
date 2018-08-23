import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { smash } from '../../redux/more';
import More from './More';

// maps the redux state to this components props
const mapStateToProps = state => ({
  destroyed: state.more.destroyed,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  smash: bindActionCreators(smash, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(More);
