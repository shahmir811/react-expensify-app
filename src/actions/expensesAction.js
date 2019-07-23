import uuid from 'uuid';
import database from '../firebase/firebase';


export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpence = (expenseData = {}) => {
  return (dispatch) => {
    const {  description = '', note = '', amount = 0, createdAt = 0 } = expenseData; // destructuring and adding default initial values

    const expense = { description, note, amount, createdAt }; // create a single expense object by adding properties

    // saving data in firebase
    return database.ref('expenses').push(expense)
    .then((ref) => {
      // now dispatching action otherwise redux store will never going to change
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))

    })
    .catch(error => console.log(error));

  }
};

export const removeExpense = ({id} = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({id} = {}) => {
  return dispatch => {
    // remove expense from firebase
    return database.ref(`expenses/${id}`).remove()
      .then(() => {
        // dispatch action
        dispatch(removeExpense({ id }));
      })
      .catch(error => console.log(error));

  }
};

export const editExpense = (id, updates = {}) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updateExpenses = {}) => {
  return dispatch => {
    // update records on firebase
    return database.ref(`expenses/${id}`).update(updateExpenses)
            .then(() => {
              // dispatch action
              dispatch(editExpense(id, updateExpenses));
            })
            .catch(error => console.log(error));
  }
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    })
    .catch(error => console.log(error));
  };
};
