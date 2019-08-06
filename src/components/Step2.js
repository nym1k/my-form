import React from 'react'

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Reason For Attending</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="whyAreYouAttending">Why would you like to come to the conference? <br/><small class="text-muted">(maximum 200 words)</small></label>
                <textarea
                className="form-control"
                name="whyAreYouAttending"
                value={this.props.whyAreYouAttending}
                onChange={this.props.handleChange}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Accommodation</strong></div>
            <div class="card-body">
              <p>If you would like to apply for conference accommodation, please tell us the dates for which you require it by ticking the relevant boxes, but please be aware that accommodation is limited so only apply if you cannot seek and alternative:</p>

              <div class="form-row">
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="march23"
                      type="checkbox"
                      checked={this.props.march23}
                      onChange={this.props.handleClick} // Prop: Puts data into state
                    />
                    <label className="form-check-label" htmlFor="march23">March 23</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="march24"
                      type="checkbox"
                      checked={this.props.march24}
                      onChange={this.props.handleClick} // Prop: Puts data into state
                    />
                    <label className="form-check-label" htmlFor="march24">March 24</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="march25"
                      type="checkbox"
                      checked={this.props.march25}
                      onChange={this.props.handleClick} // Prop: Puts data into state
                    />
                    <label className="form-check-label" htmlFor="march25">March 25</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Step2
