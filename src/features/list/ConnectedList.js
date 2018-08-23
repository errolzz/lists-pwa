import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { toggle, showText, loadLastTrack } from '../../redux/something';
import Something from './Something';

// maps the redux state to this components props
const mapStateToProps = state => ({
  count: state.something.count,
  active: state.something.active,
  message: state.something.message,
  isFetching: state.something.isFetching,
  lastTrack: state.something.lastTrack,
});

// provide the component with the dispatch method
const mapDispatchToProps = dispatch => ({
  loadLastTrack: bindActionCreators(loadLastTrack, dispatch),
  doThing: bindActionCreators(showText, dispatch),
  toggle: bindActionCreators(toggle, dispatch),
  changePage: bindActionCreators(push, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Something);
