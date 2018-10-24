import { combineReducers } from 'redux';

import ProcessosReducer from './ProcessosReducer';


const combinedStore = combineReducers({
  processos: ProcessosReducer,
});

export { combinedStore };
