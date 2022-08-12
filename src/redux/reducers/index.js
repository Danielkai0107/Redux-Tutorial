import { combineReducers } from 'redux';
import count from './count';
import person from './person';

const allReducer = combineReducers({
  count,
  person,
});

export default allReducer;
