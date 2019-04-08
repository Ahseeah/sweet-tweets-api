import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SweetTweets from './components/SweetTweets'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={SweetTweets} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
