import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpence } from '../actions/expensesAction';

const AddExpensePage = (props) => {

  function onFormSubmit (expense) {
    props.startAddExpence(expense);
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
    startAddExpence: (expense) => dispatch(startAddExpence(expense)),
  };
}

export default connect(null, mapDispatchToProps)(AddExpensePage);
