import React from 'react';
import Topbar from './Topbar';
import FootBar from './Footbar';

require('styles/app.scss');

const App = () => (
  <div>
    <Topbar />

    <FootBar />
  </div>
);

App.propTypes = {
};

export default App;
