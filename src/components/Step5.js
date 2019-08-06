import React from 'react'

class Step5 extends React.Component {
  render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }
    return(
      <div className="form-step">

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Your Proposed Internship Project</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="internshipProjectTitle">Title of proposed internship project: <br/><small class="text-muted">(Maximum 10 words)</small></label>
                <input
                  className="form-control"
                  name="internshipProjectTitle"
                  type="text"
                  value={this.props.internshipProjectTitle}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="internshipProjectPlan">What will you do? Please cover all of the below questions in your answer: <br/><small class="text-muted">(Maximum 150 words)</small></label>
                <ul>
                  <li>What questions will your internship address?</li>
                  <li>Do you already have some data you plan to use in the internship?</li>
                  <li>What new skills or methods do you hope to learn?</li>
                  <li>Will there be a written outcome from the internship, such as a published paper or research plan?</li>
                </ul>
                <textarea
                  className="form-control"
                  name="internshipProjectPlan"
                  value={this.props.internshipProjectPlan}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="internshipProjectBenefits">How would you benefit from doing your internship project? Please tell us how it will benefit your professional development, and/or conservation science or practice in your country: <br/><small class="text-muted">(Maximum 100 words)</small></label>
                <textarea
                  className="form-control"
                  name="internshipProjectBenefits"
                  value={this.props.internshipProjectBenefits}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Please look at the short courses on offer (available online in the intern guide section).</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="internshipProjectCourses">If any of these fit in with your proposed project particularly well, please mention it here. Put your answers to all of this section into the box below it. This keeps the information together for our selection committee to read.</label>
                <textarea
                  className="form-control"
                  name="internshipProjectCourses"
                  value={this.props.internshipProjectCourses}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>If you are employed or in education, is your employer or academic supervisor willing to grant you leave for this period?</strong>
            <br/>
            </div>
            <div class="card-body">
            <p>Please give the contact details of a person who knows about your work or education during the last year and who has agreed to act as a referee. This should normally be your academic supervisor or advisor, or your manager if employed. This person should not be from the UK organisation that has agreed to host your internship. You should ask the permission of this person to give their name.</p>

              <div className="form-group">
                <label htmlFor="internshipProjectRefereeName">Referee name:</label>
                <input
                  className="form-control"
                  name="internshipProjectRefereeName"
                  type="text"
                  value={this.props.internshipProjectRefereeName}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="internshipProjectRefereeEmail">Email:</label>
                <input
                  className="form-control"
                  name="internshipProjectRefereeEmail"
                  type="text"
                  value={this.props.internshipProjectRefereeEmail}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="internshipProjectRefereePhoneNumber">Phone number (please include full country code):</label>
                <input
                  className="form-control"
                  name="internshipProjectRefereePhoneNumber"
                  type="text"
                  value={this.props.internshipProjectRefereePhoneNumber}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="internshipProjectRefereePostalAddress">Postal address:</label>
                <textarea
                  className="form-control"
                  name="internshipProjectRefereePostalAddress"
                  value={this.props.internshipProjectRefereePostalAddress}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Step5
