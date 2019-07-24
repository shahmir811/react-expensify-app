import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory }  from 'history';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import LoginPage from '../components/LoginPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
