import React, { Component } from 'react'

class EventForm extends Component {
  render() {
    return (
      <div className="troop-form-wrapper">
        <h1>Cookie Event</h1>
        <form>
          <div className="form-item">
            <label for="troop-number" />
            <input
              type="number"
              name="troop-number"
              required="required"
              placeholder="Troop Number"
            />
            <label for="inventory" />
            <input
              type="text"
              name="inventory"
              required="required"
              placeholder="Cookie boxes"
            />
          </div>
          <div className="form-item">
            <label for="address" />
            <input
              type="text"
              name="address"
              required="required"
              placeholder="Address"
            />
          </div>
          <div className="form-item">
            <label for="date-time" />
            <input
              type="datetime-local"
              name="date-time"
              required="required"
              placeholder="When"
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
        <div class="form-footer" />
      </div>
    )
  }
}

export default EventForm
