import React, { useState } from "react";
import useFormState from "./hooks/useFormState";

export default function SimpleFormHooks() {
  // const [email, setEmail] = useState("");
  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // return (
  //   <div>
  //     <h1>The value is...{email}</h1>
  //     <input type="text" value={email} onChange={handleChange} />
  //     <button
  //       onClick={() => {
  //         setEmail("");
  //       }}
  //     >
  //       Submit
  //     </button>
  //   </div>
  // );

  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  return (
    <div>
      <h1>
        The email is...{email}. Password is...{password}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
}
