import React from "react";
import login from "./login";

/* As usual, change this file however you'd like. */

class LoginForm extends React.Component {
  state = { 
    user: null,
    email: '',
    password: ''
  };

  render() {
    const doit = async () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      console.log(email, password)
      this.setState({ user: await login(email, password) });
    };

    if (this.state.user) return <div>Welcome {this.state.user.name}</div>;

    return (
      <div>
        Open <code>/src/answers/Forms/index.js</code> to start
        <br />
        <br />
        Email: <input type="email" id="email" />
        <br />
        <br />
        Password: <input type="password" id="password" />
        <br />
        <br />
        <span
          style={{
            background: "#eee",
            border: "1px solid #ccc",
            display: "inline-block",
            padding: "5px 20px"
          }}
          onClick={doit}
        >
          Log In
        </span>
      </div>
    );
  }
}

export default LoginForm;