import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';
import Exponent from 'exponent';
import React from 'react';
import {AppRegistry} from 'react-native';

const PepperoniAppTemplate = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
});

Exponent.registerRootComponent(PepperoniAppTemplate);
