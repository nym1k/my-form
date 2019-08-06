import React from 'react'

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <div className="form-info p-4 mb-5">
          <h3>Notes on this section:</h3>
          <p>Here are some guidelines:</p>
          <ul>
            <li>What would you like to apply for? Please tick the relevant boxes on the online form. You will then be given access to those parts of the form which are relevant for your selected choice.</li>
            <li>You can apply to give a talk or a poster or both (Only ONE presentation will be offered). They can be on the same topic.</li>
            <li>You can apply to attend only and not give a presentation.</li>
            <li>If you are applying for a bursary then you <strong>must offer to present a talk or a poster.</strong></li>
            <li>Internship applicants must also apply to attend SCSS. Those who do not offer a talk or a poster are less likely to be awarded an internship.</li>
            <li>You can apply for a bursary <strong>and</strong> an internship, but you will not be awarded both.</li>
          </ul>
        </div>

        <fieldset>

          <div className="card">
            <div class="card-header"><strong>For the conference I would like to apply for the following:</strong></div>
            <div class="card-body">
              <div className="form-group form-check">
                <input
                  className="form-check-input"
                  name="attendanceOnly"
                  type="checkbox"
                  checked={this.props.attendanceOnly}
                  onChange={this.props.handleClick} />
                <label className="form-check-label" htmlFor="attendanceOnly">Attendance only
                </label>
              </div>

              <p>Or</p>

              <div class="form-row">
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                    className="form-check-input"
                    name="talk"
                    type="checkbox"
                    checked={this.props.talk}
                    onChange={this.props.handleClick} />
                    <label className="form-check-label" htmlFor="applyingFor">Talk <small class="text-muted">(15mins + 5 mins for questions)</small></label>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="poster"
                      type="checkbox"
                      checked={this.props.poster}
                      onChange={this.props.handleClick} />
                    <label className="form-check-label" htmlFor="applyingFor">Poster
                    <small class="text-muted">(A0 size, Landscape)</small></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>I would also like to apply for:</strong></div>
            <div class="card-body">

              <div class="form-row">
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="internship"
                      type="checkbox"
                      checked={this.props.internship}
                      onChange={this.props.handleClick} />
                    <label className="form-check-label" htmlFor="internship">Internship</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      name="bursary"
                      type="checkbox"
                      checked={this.props.bursary}
                      onChange={this.props.handleClick} />
                    <label className="form-check-label" htmlFor="bursary">Bursary</label>
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

export default Step1
