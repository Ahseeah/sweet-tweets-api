import React, { Component } from 'react'
import AuthService from './AuthService'

class SignIn extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.Auth = new AuthService()
  }
  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace('/')
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log('hooray!')
        this.props.history.replace('/')
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    return (
      <figure>
        <div className="form-wrapper">
          <h1>Sign In</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-item">
              <label htmlFor="email" />
              <input
                type="email"
                name="email"
                required="required"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password" />
              <input
                type="password"
                name="password"
                required="required"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="button-panel">
              <input
                type="submit"
                className="button"
                title="Sign In"
                value="Sign In"
              />
            </div>
          </form>
          <div className="form-footer">
            <p>
              <a href="/sign-up">Create an account</a>
            </p>
          </div>
        </div>
      </figure>
    )
  }
}

export default SignIn
