/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import ApplicationContainer from 'containers/AppContainer';
import AboutUs from 'containers/aboutUs';
import PricingPage from 'containers/PricingPage';
import configureStore from 'store';

require('es6-promise').polyfill();

const history = createBrowserHistory();

const initialStoreState = {};
const store = configureStore(initialStoreState);

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <Route exact path="/" component={ApplicationContainer} />
            <Route path="/about" component={AboutUs} />
            <Route path="/packages" component={PricingPage} />
          </Switch>
        </Router >
      </Provider>
    </AppContainer>
    , document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => {
    const NextRootContainer = require('./containers/AppContainer.jsx').default;
    renderApp(NextRootContainer);
  });
}
