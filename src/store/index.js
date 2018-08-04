import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMiddlewares = createSagaMiddleware();

middlewares.push(sagaMiddlewares);

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddlewares.run(sagas);

export default store;