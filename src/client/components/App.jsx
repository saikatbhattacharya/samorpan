import React from 'react';
import PricingComponent from './PricingComponent';
import AboutUs from './About';

require('styles/app.scss');

const App = () => (
  <div className="container">
    <AboutUs />
    <PricingComponent />
  </div>
);

App.propTypes = {
};

export default App;
