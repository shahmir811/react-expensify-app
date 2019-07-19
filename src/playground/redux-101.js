// To use Redux, we have to access createStore. Store tracks the data that is changing over time.
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
 });

 const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: "DECREMENT",
   decrementBy
 });

 const resetCount = () => ({
   type: "RESET"
});

const setCount = ({ count = 101 } = {}) => ({
  type: "SET",
  count
});

// REDUCERS
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
      break;
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
      break;
    case "SET":
      return { count: action.count };
      break;
    case "RESET":
      return { count: 0 };
      break;
    default:
      return state;
  }
};

// 1st argument is the current state. At start there is no initial state so we place an object as a default state.
// 2nd argument is an action
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// unsubscribe();
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 25 }));
