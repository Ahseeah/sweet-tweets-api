import React, { Component } from 'react'
import WithAuth from './WithAuth'
import EventForm from './EventForm'
import Header from './Header'

class SweetTweets extends Component {
  render() {
    return (
      <>
        <Header />
        <EventForm />
      </>
    )
  }
}

export default WithAuth(SweetTweets)
