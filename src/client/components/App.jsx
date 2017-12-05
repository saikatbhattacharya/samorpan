import React from 'react';
import PropTypes from 'prop-types';
import SigninForm from './SigninForm';
import TopHeader from './Topbar';
import BottomPane from './BottomPane';
import PricingComponent from './PricingComponent';

require('styles/app.scss');

const App = props => (
  <div className="container">
    <TopHeader />
    <SigninForm
      isAuthenticated={props.isAuthenticated}
      authenticate={props.authenticate}
    />
    <BottomPane />
    <PricingComponent />
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.number.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default App;
