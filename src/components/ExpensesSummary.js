import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expensesSelector';

const ExpensesSummary = ({ expensesCount, expensesTotal, hiddenExpenses }) => {

  const expenseWord             = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal  = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <small>{hiddenExpenses} hidden expenses</small>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const hiddenExpenses  = state.expenses.length - visibleExpenses.length;

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpenses
  };
}

export default connect(mapStateToProps)(ExpensesSummary);
