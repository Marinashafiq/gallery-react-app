import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import mySaga from './sagas';
import LogRocket from 'logrocket';

// // create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// // mount it on the Store
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(sagaMiddleware , LogRocket.reduxMiddleware())));

// // Run the saga
sagaMiddleware.run(mySaga);

export default store;