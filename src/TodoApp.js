import React, { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: uuidv4(), task: "Clean fish tank", completed: false },
    { id: uuidv4(), task: "Wash car", completed: true },
    { id: uuidv4(), task: "Wash dog", completed: false },
  ];
  const { todos, addTodo, removeTodo, toggleTodo, saveTodo } = useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} saveTodo={saveTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem
