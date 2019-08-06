import React from 'react'

class Step4 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <div class="alert alert-danger" role="alert">
          Please read the Internship Guidlines (available online in the Internship Section) carefully before beginning your application.
        </div>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Which UK-based conservation organisation or research group has agreed to host your internship?</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="organisationName">Name of organisation:</label>
                <input
                  className="form-control"
                  name="organisationName"
                  type="text"
                  value={this.props.organisationName}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="organisationContactName">Name of main contact person at the organisation (This must be someone in a senior position):</label>
                <input
                  className="form-control"
                  name="organisationContactName"
                  type="text"
                  value={this.props.organisationContactName}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="organisationContactEmail">Email address of main contact (only <strong>ONE</strong> email address will be accepted on the database):</label>
                <input
                  className="form-control"
                  name="organisationContactEmail"
                  type="text"
                  value={this.props.organisationContactEmail}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Step4
