import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Please login !!</h1>
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
