import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import AppNavigator from '../src/navigator/AppNavigator';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/Sagas';

import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const persistore = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistore}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}
