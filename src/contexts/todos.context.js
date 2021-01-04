import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Grow grasses", completed: false },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  // const { todos, addTodo, removeTodo, toggleTodo, saveTodo } = useTodoState(defaultTodos);

  // todos below is the name of the state.
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  // return <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, saveTodo }}>{props.children}</TodosContext.Provider>;
  return <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>;
}
