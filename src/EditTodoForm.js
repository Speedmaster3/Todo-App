import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.saveTodo(props.id, value);
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
