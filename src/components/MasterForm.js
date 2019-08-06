import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'

class MasterForm extends Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      // General
      currentStep: 1, // Default is Step 1
      stepTitles: {
        1: 'Introduction',
        2: 'The Conference',
        3: 'Your Research Project',
        4: 'Internship',
        5: 'Internship Continued',
        6: 'Bursary',
        7: 'Review'
      },
      // Step 1 - Introduction
      attendanceOnly: false,
      talk: false,
      poster: false,
      internship: false,
      bursary: false,
      step1Errors: {
        attendanceOnly: '',
        talk: '',
        poster: '',
        internship: '',
        bursary: '',
      },
      attendanceOnlyValid: false,
      talkValid: false,
      posterValid: false,
      internshipValid: false,
      bursaryValid: false,
      // Step 2 - The Conference
      whyAreYouAttending: '',
      march23: false,
      march24: false,
      march25: false,
      // Step 3 - Your Research Project
      researchProjectTitle: '',
      talkTitle: '',
      shortTalkTitle: '',
      talkQuestion: '',
      researchMethods: '',
      importantResults: '',
      relevanceOfResults: '',
      // Step 4 - Internship
      organisationName: '',
      organisationContactName: '',
      organisationContactEmail: '',
      // Step 5 - Internship Continued
      internshipProjectTitle: '',
      internshipProjectPlan: '',
      internshipProjectBenefits: '',
      internshipProjectCourses: '',
      internshipProjectRefereeName: '',
      internshipProjectRefereeEmail: '',
      internshipProjectRefereePhoneNumber: '',
      internshipProjectRefereePostalAddress: '',
      // Step 6 - Bursary
      bursaryReason: ''
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.goToStep = this.goToStep.bind(this)

    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  // Use the submitted data to set the state
  handleClick(event) {
    const target = event.target
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : value;
    this.setState({
      [name]: value
    })
  }

  goToStep(step) {
    this.setState({
      currentStep: step
    })
  }

  generateResults = () => {
    const { attendanceOnly, internship, bursary, whyAreYouAttending, march23, march24, march25, researchProjectTitle, talkTitle, shortTalkTitle, talkQuestion, researchMethods, importantResults, relevanceOfResults, organisationName, organisationContactName, organisationContactEmail, internshipProjectTitle, internshipProjectPlan, internshipProjectBenefits, internshipProjectCourses, internshipProjectRefereeName, internshipProjectRefereeEmail, internshipProjectRefereePhoneNumber, internshipProjectRefereePostalAddress, bursaryReason } = this.state
    // alert(`Your registration detail: \n
    //   Username: ${username} \n
    //   Password: ${password}`)
    return ''
      + '<h3>Your application details:</h3>'

      + '<ul>'
        + `<li><strong>attendanceOnly:</strong> ${attendanceOnly}</li>`
        + `<li><strong>internship:</strong> ${internship}</li>`
        + `<li><strong>bursary:</strong> ${bursary}</li>`
      + '</ul>'

      + '<ul>'
        + `<li><strong>whyAreYouAttending:</strong> ${whyAreYouAttending}</li>`
        + `<li><strong>march23:</strong> ${march23}</li>`
        + `<li><strong>march24:</strong> ${march24}</li>`
        + `<li><strong>march25:</strong> ${march25}</li>`
      + '</ul>'

      + '<ul>'
        + `<li><strong>researchProjectTitle:</strong> ${researchProjectTitle}</li>`
        + `<li><strong>talkTitle:</strong> ${talkTitle}</li>`
        + `<li><strong>shortTalkTitle:</strong> ${shortTalkTitle}</li>`
        + `<li><strong>talkQuestion:</strong> ${talkQuestion}</li>`
        + `<li><strong>researchMethods:</strong> ${researchMethods}</li>`
        + `<li><strong>importantResults:</strong> ${importantResults}</li>`
        + `<li><strong>relevanceOfResults:</strong> ${relevanceOfResults}</li>`
      + '</ul>'

      + '<ul>'
        + `<li><strong>organisationName:</strong> ${organisationName}</li>`
        + `<li><strong>organisationContactName:</strong> ${organisationContactName}</li>`
        + `<li><strong>organisationContactEmail:</strong> ${organisationContactEmail}</li>`
      + '</ul>'

      + '<ul>'
        + `<li><strong>internshipProjectTitle:</strong> ${internshipProjectTitle}</li>`
        + `<li><strong>internshipProjectPlan:</strong> ${internshipProjectPlan}</li>`
        + `<li><strong>internshipProjectBenefits:</strong> ${internshipProjectBenefits}</li>`
        + `<li><strong>internshipProjectCourses:</strong> ${internshipProjectCourses}</li>`
        + `<li><strong>internshipProjectRefereeName:</strong> ${internshipProjectRefereeName}</li>`
        + `<li><strong>internshipProjectRefereeEmail:</strong></li> ${internshipProjectRefereeEmail}`
        + `<li><strong>internshipProjectRefereePhoneNumber:</strong></li> ${internshipProjectRefereePhoneNumber}`
        + `<li><strong>internshipProjectRefereePostalAddress:</strong></li> ${internshipProjectRefereePostalAddress}`
      + '</ul>'

      + '<ul>'
        + `<li><strong>bursaryReason:</strong> ${bursaryReason}</li>`
      + '</ul>'
  }

  outputResults = () => {
    document.querySelector('.form-results').innerHTML = this.generateResults()
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { } = this.state
    // alert(`Your registration detail: \n
    //   Username: ${username} \n
    //   Password: ${password}`)
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click

  _next() {
    let currentStep = this.state.currentStep
    {/* If the current step is below 7, then add one on "next" button click */}
    currentStep = currentStep >= 6 ? 7 : currentStep + 1
    // if bursary = true then skip step 2
    if (currentStep == 2 && this.state.bursary == true) {
      currentStep += 1;
    }
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    {/* If the current step is 2 or 3, then subtract one on "previous" button click */}
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    // if bursary = true then skip step 2
    if (currentStep == 2 && this.state.bursary == true) {
      currentStep -= 1;
    }
    this.setState({
      currentStep: currentStep
    })
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep
    {/* If the current step is not 1, then render the "previous" button */}
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary btn-lg"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    {/* ...else return nothing */}
    return null
  }

  get nextButton(){
    let currentStep = this.state.currentStep
    {/* If the current step is not 6, then render the "next" button */}
    if (currentStep < 7) {
      return (
        <button
          className="btn btn-primary btn-lg float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    {/* ...else render nothing */}
    return null
  }

  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0">
              <li class="breadcrumb-item active text-body lead" aria-current="page">Online Application > Step {this.state.currentStep} - {this.state.stepTitles[this.state.currentStep]}</li>
            </ol>
          </nav>
        <div className="row">
          <div className="col-sm-9">
            <form
              className="form"
              onSubmit={this.handleSubmit}>

              <header className="form-header">
                <h1>Online Application - Step {this.state.currentStep}</h1> <h3>{this.state.stepTitles[this.state.currentStep]}</h3>
              </header>

              {/* Render the form steps and pass in the required props */}
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                talk={this.state.talk}
                poster={this.state.poster}
                internship={this.state.internship}
                bursary={this.state.bursary}
                step1Errors={this.state.step1Errors}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                whyAreYouAttending={this.state.whyAreYouAttending}
                march23={this.state.march23}
                march24={this.state.march24}
                march25={this.state.march25}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                researchProjectTitle={this.state.researchProjectTitle}
                talkTitle={this.state.talkTitle}
                shortTalkTitle={this.state.shortTalkTitle}
                talkQuestion={this.state.talkQuestion}
                researchMethods={this.state.researchMethods}
                importantResults={this.state.importantResults}
                relevanceOfResults={this.state.relevanceOfResults}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                organisationName={this.state.organisationName}
                organisationContactName={this.state.organisationContactName}
                organisationContactEmail={this.state.organisationContactEmail}
              />
              <Step5
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                internshipProjectTitle={this.state.internshipProjectTitle}
                internshipProjectPlan={this.state.internshipProjectPlan}
                internshipProjectBenefits={this.state.internshipProjectBenefits}
                internshipProjectCourses={this.state.internshipProjectCourses}
                internshipProjectRefereeName={this.state.internshipProjectRefereeName}
                internshipProjectRefereeEmail={this.state.internshipProjectRefereeEmail}
                internshipProjectRefereePhoneNumber={this.state.internshipProjectRefereePhoneNumber}
                internshipProjectRefereePostalAddress={this.state.internshipProjectRefereePostalAddress}
              />
              <Step6
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                bursaryReason={this.state.bursaryReason}
              />
              <Step7
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                state={this.state}
              />
            </form>

            {/* Output form navigation buttons */}
            <div className="nav-buttons clearfix">
              {this.previousButton}
              {this.nextButton}
            </div>
          </div>
          <div className="col-sm-3">
            <div className="test">
              <ul className="progress-steps">
                <li className={`progress-step${this.state.currentStep == 1 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 1</p>
                  <small className="text-muted">{this.state.stepTitles[1]}</small>
                </li>
                <li className={`progress-step${this.state.currentStep == 2 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 2</p>
                  <small className="text-muted">{this.state.stepTitles[2]}</small>
                </li>
                <li className={`progress-step${this.state.currentStep == 3 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 3</p>
                  <small className="text-muted">{this.state.stepTitles[3]}</small>
                </li>
                <li className={`progress-step${this.state.currentStep == 4 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 4</p>
                  <small className="text-muted">{this.state.stepTitles[4]}</small>
                </li>
                <li className={`progress-step${this.state.currentStep == 5 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 5</p>
                  <small className="text-muted">{this.state.stepTitles[5]}</small>
                </li>
                <li className={`progress-step${this.state.currentStep == 6 ? ' step-active' : ''}`}>
                  <FontAwesomeIcon className="progress-icon" icon={faTimesCircle} style={{ color: '#FF2600' }} size="lg" />
                  <p className="progress-step_text">Step 6</p>
                  <small className="text-muted">{this.state.stepTitles[6]}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>


        </div>
      </React.Fragment>
    )
  }
}

export default MasterForm
