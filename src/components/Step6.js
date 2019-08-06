import React from 'react'

class Step6 extends React.Component {
  render() {
    if (this.props.currentStep !== 6) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Bursary</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="bursaryReason">Please state the reasons why you feel you should be given a bursary: <br/><small class="text-muted">(maximum 200 words)</small></label>
                <textarea
                  className="form-control"
                  name="bursaryReason"
                  value={this.props.bursaryReason}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Step6
