import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm(props) {
  const { saveTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(props.id, value);
        reset();
        props.toggleIsEditing();
      }}
      style={{ marginLeft: "0.75rem", width: "100%" }}
    >
      <TextField value={value} onChange={handleChange} margin="normal" label="Edit Todo" fullWidth autoFocus />
    </form>
  );
}

export default EditTodoForm;
