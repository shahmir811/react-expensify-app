import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesAction';

const AddExpensePage = (props) => {

  function onFormSubmit (expense) {
    props.addExpense(expense);
    props.history.push('/')
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={(expense) => onFormSubmit(expense)} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
  };
}

export default connect(null, mapDispatchToProps)(AddExpensePage);
