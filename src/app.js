import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

import { addExpense } from './actions/expensesAction';
import { setTextFilter } from './actions/filtersAction';
import getVisibleExpenses from './selectors/expensesSelector';

store.dispatch(addExpense({ description: 'Water Bill', amount: 300 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
// store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
