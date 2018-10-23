import React from "react";
import login from "./login";

/* As usual, change this file however you'd like. */

class LoginForm extends React.Component {
  state = { 
    user: null,
    email: '',
    password: ''
  };

  emailInput = e => {
    this.setState({email: e.target.value})
  }

  passwordInput = e => {
    this.setState({password: e.target.value})
  }

  submitForm = async () => {
    this.setState({ user: await login(this.state.email, this.state.password)});
  }

  render() {
    return (
      this.state.user
      ?
      <div>Welcome {this.state.user.name}</div>
      :
      <form onSubmit={this.submitForm}>
        <div>
          Open <code>/src/answers/Forms/index.js</code> to start
          <br />
          <br />
          Email: <input type="email" id="email" onChange={this.emailInput}/>
          <br />
          <br />
          Password: <input type="password" id="password" onChange={this.passwordInput}/>
          <br />
          <br />
          <button
            style={{
              background: "#eee",
              border: "1px solid #ccc",
              display: "inline-block",
              padding: "5px 20px"
            }}
          >
            Log In
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm;