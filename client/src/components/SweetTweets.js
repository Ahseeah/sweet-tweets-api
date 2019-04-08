import React, { Component } from 'react'
import logo from '../images/sweet-tweets-logo.png'
import AuthService from './AuthService'
import WithAuth from './WithAuth'
import EventForm from './EventForm'

const Auth = new AuthService()

class SweetTweets extends Component {
  handleLogout() {
    Auth.logout()
    this.props.history.replace('/sign-in')
  }

  render() {
    return (
      <>
        <div className="Sweet">
          <div className="Sweet-header">
            <img src={logo} className="sweet-tweets-logo" alt="logo" />
            <h2>Welcome {this.props.user.username}</h2>
          </div>
          <p className="App-intro">
            <button
              type="button"
              className="form-submit"
              onClick={this.handleLogout.bind(this)}
            >
              Logout
            </button>
          </p>
        </div>
        <EventForm />
      </>
    )
  }
}

export default WithAuth(SweetTweets)
