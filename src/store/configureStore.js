import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combining all reducers
const allReducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default () => {

  // Store creation
  const store = createStore(allReducers, composeEnhancers(applyMiddleware(ReduxThunk)));

  return store;
};
