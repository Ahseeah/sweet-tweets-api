import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class SuccessPage extends Component {
  handleClick = e => {
    e.preventDefault()
    this.props.history.replace('/')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="success-wrapper">
          <h1>Success! It's Cookie Time!</h1>
          <div className="success-body">
            <img
              className="success-img"
              src="https://lh6.googleusercontent.com/-ly7VNHdei4w/U4rS1A6OOYI/AAAAAAAE_Ac/3WfsX31b3yg/w500-h355-no/tumblr_n5iuntOTjU1sk1rjvo1_500.gif"
              alt="Success"
            />
          </div>
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SweetTweetsApp"
                options={{ height: 400 }}
              />
            </div>
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button addButton"
              title="Submit"
              value="Add Another Event"
              onClick={this.handleClick}
            />
          </div>
          <div className="form-footer" />
        </div>
      </div>
    )
  }
}

export default withRouter(SuccessPage)
