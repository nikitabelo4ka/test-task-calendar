import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { calendarReducer } from './calendarReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
