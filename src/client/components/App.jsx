import React from 'react';
import TopHeader from './Topbar';
import PricingComponent from './PricingComponent';

require('styles/app.scss');

const App = () => (
  <div className="container">
    <TopHeader />
    <PricingComponent />
  </div>
);

App.propTypes = {
};

export default App;
