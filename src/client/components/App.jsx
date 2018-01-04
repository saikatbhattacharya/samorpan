import React from 'react';
import Topbar from './Topbar';
import FootBar from './Footbar';
import MainBody from './MainBody';

require('styles/app.scss');

const App = () => (
  <div>
    <Topbar />
    <MainBody />
    <FootBar />
  </div>
);

App.propTypes = {
};

export default App;
