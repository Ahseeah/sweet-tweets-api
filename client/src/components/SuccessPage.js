import React, { Component } from 'react'
import Header from './Header'
class SuccessPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="troop-form-wrapper" />
        <h1>Success!</h1>
        <form onSubmit={this.handleFormSubmit} />
        <div className="form-item" />
        <label htmlFor="success-page" />
        <input
          type="text"
          name="success-page"
          required="required"
          placeholder="Success"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SuccessPage
