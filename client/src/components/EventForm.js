import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AuthService from './AuthService'
import DateTimePicker from 'react-datetime-picker'

const today = new Date()
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

class EventForm extends Component {
  constructor() {
    super()
    this.state = {
      troops: [],
      startDateTime: today,
      endDateTime: tomorrow
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
        troop_id: this.state.troop_id,
        city: this.state.city,
        end_time: this.state.endDateTime,
        samoas: this.state.samoas,
        savannah_smiles: this.state.savannah_smiles,
        start_time: this.state.startDateTime,
        state: this.state.state,
        street: this.state.street,
        tagalongs: this.state.tagalongs,
        thin_mints: this.state.thin_mints,
        zip_code: this.state.zip_code
      })
    })
      .then(res => {
        this.props.history.replace('/success')
      })
      .catch(err => {
        alert(err)
      })
  }

  onStartChange = startDateTime => this.setState({ startDateTime })

  onEndChange = endDateTime => this.setState({ endDateTime })

  render() {
    return (
      <div className="troop-form-wrapper">
        <h1>Cookie Event</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="troop-number" />
            <select name="troop_id" onChange={this.handleChange}>
              <option value="">Troop Number</option>
              {this.state.troops.map(troop => (
                <option value={troop.id}>{troop.troop_number}</option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="street" />
            <input
              type="text"
              name="street"
              required="required"
              placeholder="Street"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="city" />
            <input
              type="text"
              name="city"
              required="required"
              placeholder="City"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="state" />
            <input
              type="text"
              name="state"
              required="required"
              placeholder="State"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="zipcode" />
            <input
              type="text"
              name="zip_code"
              required="required"
              placeholder="Zip Code"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="thin_mints" />
            <input
              type="text"
              name="thin_mints"
              required="required"
              placeholder="Boxes of Thin Mints"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="samoas" />
            <input
              type="text"
              name="samoas"
              required="required"
              placeholder="Boxes of Samoas"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="savannah_smiles" />
            <input
              type="text"
              name="savannah_smiles"
              required="required"
              placeholder="Boxes of Savannah Smiles"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="tagalongs" />
            <input
              type="text"
              name="tagalongs"
              required="required"
              placeholder="Boxes of Tagalongs"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-item-date">
            <label htmlFor="date-time">Start DateTime: </label>
            <DateTimePicker
              onChange={this.onStartChange}
              value={this.state.startDateTime}
              name={'start_time'}
            />
          </div>
          <div className="form-item-date">
            <label htmlFor="date-time">End DateTime: </label>
            <DateTimePicker
              onChange={this.onEndChange}
              value={this.state.endDateTime}
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

export default withRouter(EventForm)
