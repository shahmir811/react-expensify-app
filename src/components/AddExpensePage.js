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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={(expense) => onFormSubmit(expense)} />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    startAddExpence: (expense) => dispatch(startAddExpence(expense)),
  };
}

export default connect(null, mapDispatchToProps)(AddExpensePage);
