import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { LABELS, PROPS } from '../../constants/constants';
import Button from '../../components/button/Button';
import ListTitle from '../../components/list-title/ListTitle';
import ConnectedList from '../../features/list/ConnectedList';
import ConnectedListForm from '../../features/list-form/ConnectedListForm';

const Home = ({
  lists,
  listId,
  showList,
  showListForm,
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
            click={showListForm}
          />
        </div>
      </div>
    }
    { listId &&
      <ConnectedList />
    }
    { creatingList &&
      <ConnectedListForm />
    }
  </div>
);

Home.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape(PROPS.LIST)).isRequired,
  listId: PropTypes.string,
  showList: PropTypes.func.isRequired,
  showListForm: PropTypes.func.isRequired,
  creatingList: PropTypes.bool,
};

Home.defaultProps = {
  listId: undefined,
  creatingList: false,
};

export default Home;
