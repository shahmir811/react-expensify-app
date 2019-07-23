import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expensesAction';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {

  function onFormSubmit(expense){
    props.editExpense(props.expense.id, expense);
    props.history.push('/');
  }

  function onRemoveExpense() {
    props.startRemoveExpense({id: props.expense.id});
    props.history.push('/');
  }

  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={(expense) => onFormSubmit(expense)} />
      <button onClick={() => onRemoveExpense()}>Remove</button>
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
