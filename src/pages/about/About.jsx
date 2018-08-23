import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ConnectedMore from '../../features/more/ConnectedMore';

const About = ({ match }) => (
  <div className="page-about">
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>Hello {match.params.id}</h1>
    <ConnectedMore />
  </div>
);

About.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

About.defaultProps = {
  match: {},
};

export default About;
