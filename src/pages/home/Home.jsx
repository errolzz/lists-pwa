import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LABELS, PROPS } from '../../constants/constants';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import ConnectedList from '../../features/list/ConnectedList';
import ConnectedListForm from '../../features/list-form/ConnectedListForm';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.listSelected = this.listSelected.bind(this);
    this.listPress = this.listPress.bind(this);
    this.listRelease = this.listRelease.bind(this);
    this.scrollerScroll = this.scrollerScroll.bind(this);
    this.state = {
      scrolled: false,
    };
  }

  listSelected(listId) {
    if (!this.state.scrolled && !this.state.moveItemSelected) {
      this.props.showList(listId);
    }
  }

  listPress(listId, listIndex) {
    this.pressTimer = setTimeout(() => {
      this.setState({
        moveItemSelected: true,
        movingListId: listId,
        movingIndex: listIndex,
      });
    }, 366);
  }

  listRelease(index) {
    clearTimeout(this.pressTimer);
    if (!this.state.moveItemSelected && this.state.movingListId && !this.state.scrolled) {
      this.props.moveList(this.props.listId, this.state.movingIndex, index);
      this.setState({
        movingListId: undefined,
        movingIndex: undefined,
      });
    }

    this.setState({
      scrolled: false,
      moveItemSelected: false,
    });
  }

  scrollerScroll() {
    this.setState({
      scrolled: true,
      moveItemSelected: false,
    });
  }

  render() {
    return (
      <div className="home">
        <Helmet>
          <title>Lists</title>
        </Helmet>
        { this.props.lists && !this.props.listId && !this.props.creatingList &&
          <div className="list-list">
            <div
              className="list-title-holder"
              onScroll={this.scrollerScroll}
              onTouchEnd={() => this.setState({ scrolled: false })}
            >
              { this.props.lists.map((list, index) => (
                <ListTitle
                  key={list.id}
                  id={list.id}
                  index={index}
                  title={list.title}
                  count={list.items.length}
                  titleClick={this.listSelected}
                  onPress={this.listPress}
                  onRelease={this.listRelease}
                  movable
                  allowDrop={this.state.movingListId !== undefined}
                  beingMoved={this.state.movingListId === list.id}
                />
              ))}
            </div>
            <div className="create-list">
              <Button
                label={LABELS.CREATE_NEW_LIST}
                click={() => this.props.showListForm(true)}
              />
            </div>
          </div>
        }

        { this.props.listId && !this.props.creatingList &&
          <ConnectedList />
        }
        { this.props.creatingList &&
          <ConnectedListForm updateData={this.props.lists.find(list => list.id === this.props.listId)} />
        }
      </div>
    );
  }
}

Home.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape(PROPS.LIST)).isRequired,
  listId: PropTypes.string,
  showList: PropTypes.func.isRequired,
  moveList: PropTypes.func.isRequired,
  showListForm: PropTypes.func.isRequired,
  creatingList: PropTypes.bool,
};

Home.defaultProps = {
  listId: undefined,
  creatingList: false,
};

export default Home;
