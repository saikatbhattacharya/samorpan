import React from 'react';
import PricingComponent from './PricingComponent';
import AboutUs from './About';
import Topbar from './Topbar';

require('styles/app.scss');

const App = () => (
  <div>
    <Topbar />
    <div className="container">
      <AboutUs />
      <PricingComponent />
    </div>
  </div>
);

App.propTypes = {
};

export default App;
