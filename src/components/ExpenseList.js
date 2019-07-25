import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = (props) => {

  const renderList = () => {
    if (props.expenses.length === 0 ) {
      return (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      );
    }

    return props.expenses.map((expense, index) => <ExpenseListItem {...expense} key={expense.id} />);

  }


  return (
    <div className="content-container">
      <h1>Expense List of {props.name}</h1>
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {  renderList() }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
