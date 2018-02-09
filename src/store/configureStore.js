/**
 * Created by borys-duda
 */

import {autoRehydrate, persistStore} from "redux-persist-immutable";
import {combineReducers} from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import {REHYDRATE} from "redux-persist/src/constants";
import Immutable from "immutable";
import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import createSagaMiddleware from "redux-saga";
import LoginReducer from "../reducers/loginReducer";

import { loginFlow } from "../reducers/sagas/loginSaga";

const combinedReducers = combineReducers({
  auth: LoginReducer,
});

const initialState = new Immutable.Map({
  auth: Immutable.Map({
    isLoggedIn: false,
    loginError: {},
    email:'',
    password:'',
    api_key:''
  }),

});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware)));
    /**
      * remove persist temporarily
      * , createActionBuffer(REHYDRATE)), autoRehydrate({log: true})));
      */
    // compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({log: true})));

  persistStore(
    store,
    {
      storage: AsyncStorage,
      blacklist: ['root'],
    }
  );
  return {
    ...store, runSaga: [
      sagaMiddleware.run(loginFlow),
    ]
  };
}