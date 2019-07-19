import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = (props) => {

  const renderList = props.expenses.map((expense, index) => <ExpenseListItem {...expense} key={expense.id} />);


  return (
    <div>
      <h1>Expense List of {props.name}</h1>
      {  renderList }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
