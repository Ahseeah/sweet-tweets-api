import React, { Component } from 'react'
import logo from '../images/Sweet_Tweets_Logo.png'
import AuthService from './AuthService'
import WithAuth from './WithAuth'
import { withRouter } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Auth = new AuthService()

class Header extends Component {
  handleLogout() {
    Auth.logout()
    this.props.history.replace('/sign-in')
  }

  render() {
    return (
      <>
        <div class="header">
          <div className="header-left">
            <img src={logo} className="sweet-tweets-logo" alt="logo" />
          </div>
          <a className="header-right" onClick={this.handleLogout.bind(this)}>
            Log Out
          </a>
        </div>
      </>
    )
  }
}

export default withRouter(WithAuth(Header))
