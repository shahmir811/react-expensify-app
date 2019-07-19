import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

// combining all reducers
const allReducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default () => {

  // Store creation
  const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};
