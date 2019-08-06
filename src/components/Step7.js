import React from 'react'

class Step7 extends React.Component {
  render() {
    if (this.props.currentStep !== 7) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <p>Thank you for completing the form. Please click submit to finish.</p>

        <div className="results">
          <h2>Your application details:</h2>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 1 - Introduction</strong></div>
              <div class="card-body">
                <p className="lead"><strong>What are you applying for:</strong></p>
                <ul>
                  <li><strong>Attendance Only:</strong> {this.props.state.attendanceOnly ? 'Yes' : 'No'}</li>
                  <li><strong>Internship:</strong> {this.props.state.internship ? 'Yes' : 'No'}</li>
                  <li><strong>Bursary:</strong> {this.props.state.bursary ? 'Yes' : 'No'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 2 - The Conference</strong></div>
              <div class="card-body">
                <p className="lead"><strong>Why would you like to come to our conference?</strong></p>
                <p>{this.props.state.whyAreYouAttending}</p>

                <p className="lead"><strong>Accommodation required on:</strong></p>
                <ul>
                  <li><strong>March 23:</strong> {this.props.state.march23 ? 'Yes' : 'No'}</li>
                  <li><strong>March 24:</strong> {this.props.state.march24 ? 'Yes' : 'No'}</li>
                  <li><strong>March 25:</strong> {this.props.state.march25 ? 'Yes' : 'No'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 3 - Your Research Project</strong></div>
              <div class="card-body">
                <p className="lead"><strong>Title of Current Research Project:</strong></p>
                <p>{this.props.state.researchProjectTitle}</p>

                <p className="lead"><strong>Title of Talk/Poster:</strong></p>
                <p>{this.props.state.talkTitle}</p>

                <p className="lead"><strong>Talk/Poster Short Title:</strong></p>
                <p>{this.props.state.shortTalkTitle}</p>

                <p className="lead"><strong>Details of Talk/Poster:</strong></p>
                <ol>
                  <li>
                    <p>What conservation problem or question does your talk/poster address?</p>
                    <p>{this.props.state.talkQuestion}</p>
                  </li>

                  <li>
                    <p>What were the main research methods you used?</p>
                    <p>{this.props.state.researchMethods}</p>
                  </li>

                  <li>
                    <p>What are your most important results?</p>
                    <p>{this.props.state.importantResults}</p>
                  </li>

                  <li>
                    <p>What is the relevance of your results to conservation?</p>
                    <p>{this.props.state.relevanceOfResults}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 4 - Internship</strong></div>
              <div class="card-body">
                <p className="lead"><strong>Organisation Name:</strong></p>
                <p>{this.props.state.organisationName}</p>

                <p className="lead"><strong>Organisation Contact Name:</strong></p>
                <p>{this.props.state.organisationContactName}</p>

                <p className="lead"><strong>Organisation Contact Email:</strong></p>
                <p>{this.props.state.organisationContactEmail}</p>
              </div>
            </div>
          </div>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 5 - Internship Continued</strong></div>
              <div class="card-body">
                <p className="lead"><strong>Title of your Proposed Internship Project:</strong></p>
                <p>{this.props.state.internshipProjectTitle}</p>

                <p className="lead"><strong>What will you do?</strong></p>
                <p>{this.props.state.internshipProjectPlan}</p>

                <p className="lead"><strong>How would you benefit from an internship project?</strong></p>
                <p>{this.props.state.internshipProjectBenefits}</p>

                <p className="lead"><strong>Courses that fit in with your proposed project:</strong></p>
                <p>{this.props.state.internshipProjectCourses}</p>

                <p className="lead"><strong>Referee Details</strong></p>
                <ul>
                  <li>
                    <p>Name:</p>
                    <p>{this.props.state.internshipProjectRefereeName}</p>
                  </li>
                  <li>
                    <p>Email:</p>
                    <p>{this.props.state.internshipProjectRefereeEmail}</p>
                  </li>
                  <li>
                    <p>PhoneNumber:</p>
                    <p>{this.props.state.internshipProjectRefereePhoneNumber}</p>
                  </li>
                  <li>
                    <p>PostalAddress:</p>
                    <p>{this.props.state.internshipProjectRefereePostalAddress}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-group">
            <div className="card">
              <div class="card-header"><strong>Step 6 - Bursary</strong></div>
              <div class="card-body">
                <p className="lead">Please state the reasons why you feel you should be given a bursary:</p>
                <p>{this.props.state.bursaryReason}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="results-group">
          <button className="btn btn-success btn-block">Sign up</button>
        </div>
      </div>
    )
  }
}

export default Step7
