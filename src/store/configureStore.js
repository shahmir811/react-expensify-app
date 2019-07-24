import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combining all reducers
const allReducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer
});

export default () => {

  // Store creation
  const store = createStore(allReducers, composeEnhancers(applyMiddleware(ReduxThunk)));

  return store;
};
