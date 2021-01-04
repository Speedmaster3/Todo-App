import React, { useReducer } from "react";
import TodoApp from "./TodoApp";
import "./App.css";

function App() {
  return <TodoApp />;
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + action.amount };
//     case "Decrement":
//       return { count: state.count - action.amount };
//     case "Reset":
//       return { count: 0 };
//   }
// }

// function App() {
//   // return <TodoApp />;
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "Increment", amount: 1 })}>Add 1</button>
//       <button onClick={() => dispatch({ type: "Increment", amount: 5 })}>Add 5</button>
//       <button onClick={() => dispatch({ type: "Decrement", amount: 1 })}>Subtract 1</button>
//       <button onClick={() => dispatch({ type: "Reset" })}>RESET</button>
//     </div>
//   );
// }

export default App;
