import React, { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <div className="troop-form-wrapper">
        <h1>Sign Up</h1>
        <form>
          <div className="form-item">
            <label for="full name" />
            <input
              type="text"
              name="full-name"
              required="required"
              placeholder="Full Name"
            />
          </div>
          <div className="form-item">
            <label for="email" />
            <input
              type="text"
              name="email"
              required="required"
              placeholder="Email"
            />
            <label for="favorite cookie" />
            <input
              type="text"
              name="favorite-cookie"
              required="required"
              placeholder="Favorite cookie!"
            />
            <label for="password" />
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
            />
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button"
              title="Submit"
              value="Submit"
            />
          </div>
        </form>
        <div className="form-footer" />
      </div>
    )
  }
}

export default SignUp
