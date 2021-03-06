import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store/configureStore';

const store = configureStore();

export default class Root extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
