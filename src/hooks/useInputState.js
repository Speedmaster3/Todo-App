import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");
  return [value, handleChange, reset];
};

// This is how to use useInputState
// const [ age, handleAgeChange, resetAge] = useInputtate("")
