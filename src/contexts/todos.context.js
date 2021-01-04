import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Grow grass", completed: false },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, saveTodo } = useTodoState(defaultTodos);
  return <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, saveTodo }}>{props.children}</TodosContext.Provider>;
}
