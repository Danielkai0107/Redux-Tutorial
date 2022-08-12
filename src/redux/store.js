import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducer from './reducers/index';

//輸出 store
export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
