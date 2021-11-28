/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RoutesClass from './src/screens/RouteClass';
import {Provider} from 'react-redux';
import redux from './src/redux/config/redux';
const App = () => (
  <Provider store={redux.store}>
    <RoutesClass />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
