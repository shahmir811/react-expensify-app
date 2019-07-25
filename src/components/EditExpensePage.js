import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expensesAction';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {

  function onFormSubmit(expense){
    props.startEditExpense(props.expense.id, expense);
    props.history.push('/');
  }

  function onRemoveExpense() {
    props.startRemoveExpense({id: props.expense.id});
    props.history.push('/');
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm expense={props.expense} onSubmit={(expense) => onFormSubmit(expense)} />
        <button className="button button--secondary" onClick={() => onRemoveExpense()}>Remove expense</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find(expense => expense.id === ownProps.match.params.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
