/**
 */

import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import promise from './promise';
import array from './array';
import analytics from './analytics';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import {
  AsyncStorage,
} from 'react-native';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createDStore = applyMiddleware(thunk, promise, array, analytics, logger)(createStore);

export default function configureStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createDStore)(reducers);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

