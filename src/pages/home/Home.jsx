import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LABELS } from '../../constants/constants';
import ListTitle from '../../components/list-title/ListTitle';

const Home = ({
  lists,
  listId,
  showList,
  createList,
  creatingList,
}) => (
  <div className="page-home">
    <Helmet>
      <title>Lists</title>
    </Helmet>
    { lists && !listId && !creatingList &&
      <div className="list-list">
        <div className="list-title-holder">
          { lists.map(list => (
            <ListTitle
              title={list.title}
              count={list.items.length}
              click={() => showList(list.id)}
            />
          ))}
        </div>
        <div className="create-list">
          <Button
            label={LABELS.CREATE_NEW_LIST}
            click={createList}
          />
        </div>
      </div>
    }
    { listId &&
      <List data={lists.find(list => list.id === listId)} />
    }
    { creatingList &&

    }
  </div>
);

Home.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    isChecklist: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool,
    })),
  })).isRequired,
  listId: PropTypes.string,
  showList: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  creatingList: PropTypes.bool,
};

Home.defaultProps = {
  listId: undefined,
  creatingList: false,
};

export default Home;
