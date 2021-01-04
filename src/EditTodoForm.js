import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm(props) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: props.id, newTask: value });
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
