import React, { Component } from 'react'
import AuthService from './AuthService'
import DateTimePicker from 'react-datetime-picker'

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

class EventForm extends Component {
  constructor() {
    super()
    this.state = {
      troops: [],
      startDate: today,
      endDate: tomorrow
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.Auth = new AuthService()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.Auth.fetch('/troops').then(response => {
      this.setState({ troops: response })
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    this.Auth.fetch('/events', {
      method: 'POST',
      body: JSON.stringify({
        ...this.state
      })
    })
      .then(res => {
        console.log('hooray!')
        this.props.history.replace('/')
      })
      .catch(err => {
        alert(err)
      })
  }

  onStartChange = startDate => this.setState({ startDate })

  onEndChange = endDate => this.setState({ endDate })

  render() {
    return (
      <div className="troop-form-wrapper">
        <h1>Cookie Event</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="troop-number" />
            <input
              type="number"
              name="troop_number"
              required="required"
              placeholder="Troop Number"
            />
          </div>
          <div className="form-item">
            <label htmlFor="street" />
            <input
              type="text"
              name="street"
              required="required"
              placeholder="Street"
            />
          </div>
          <div className="form-item">
            <label htmlFor="city" />
            <input
              type="text"
              name="city"
              required="required"
              placeholder="City"
            />
          </div>
          <div className="form-item">
            <label htmlFor="state" />
            <input
              type="text"
              name="state"
              required="required"
              placeholder="State"
            />
          </div>
          <div className="form-item">
            <label htmlFor="zipcode" />
            <input
              type="text"
              name="zip_code"
              required="required"
              placeholder="Zip Code"
            />
          </div>
          <div className="form-item">
            <label htmlFor="thin_mints" />
            <input
              type="text"
              name="thin_mints"
              required="required"
              placeholder="Boxes of Thin Mints"
            />
          </div>
          <div className="form-item">
            <label htmlFor="samoas" />
            <input
              type="text"
              name="samoas"
              required="required"
              placeholder="Boxes of Samoas"
            />
          </div>
          <div className="form-item">
            <label htmlFor="savannah_smiles" />
            <input
              type="text"
              name="savannah_smiles"
              required="required"
              placeholder="Boxes of Savannah Smiles"
            />
          </div>
          <div className="form-item">
            <label htmlFor="tagalongs" />
            <input
              type="text"
              name="tagalongs"
              required="required"
              placeholder="Boxes of Samoas"
            />
          </div>
          <div className="form-item">
            <label htmlFor="date-time">Start DateTime: </label>
            <DateTimePicker
              onChange={this.onStartChange}
              value={this.state.startDate}
              name={'start_time'}
            />
          </div>
          <div className="form-item">
            <label htmlFor="date-time">End DateTime: </label>
            <DateTimePicker
              onChange={this.onEndChange}
              value={this.state.endDate}
              name={'end_time'}
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

export default EventForm
