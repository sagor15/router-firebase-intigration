import React from "react";
import useRegister from "../../Hooks/useRegister";

const Login = () => {
  const { signInWithGoogle } = useRegister();
  return (
    <div>
      <h1>Please login !!</h1>
      <button onClick={signInWithGoogle}>sign in google</button>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <br />
        <input type="password" placeholder="Your password" />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
