export default (expenses) => {

// short syntax
  return expenses
            .map(expense => expense.amount)
            .reduce((a, b) => a + b, 0);


// long syntax
// return expenses.map(expense => {
//   return expense.amount;
// })
// .reduce((a, b) => {
//   return a + b;
// }, 0);


}
