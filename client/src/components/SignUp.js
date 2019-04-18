import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AuthService from './AuthService'
import logo from '../images/Sweet_Tweets_Logo.png'

class SignUp extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.Auth = new AuthService()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    this.Auth.fetch('/user', {
      method: 'POST',
      body: JSON.stringify({
        ...this.state
      })
    })
      .then(res => {
        this.props.history.replace('/sign-in')
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="img-container">
          <img src={logo} className="sweet-tweets-logo" alt="logo" />
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="email" />
            <input
              type="text"
              name="email"
              required="required"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <label htmlFor="password" />
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <label htmlFor="password_confirmation" />
            <input
              type="password"
              name="password_confirmation"
              required="required"
              placeholder="Password"
              onChange={this.handleChange}
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

export default withRouter(SignUp)
