import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combinedStore } from './reducers/';

const middlewares = [thunk];

const store = createStore(combinedStore, applyMiddleware(...middlewares));

export { store };
