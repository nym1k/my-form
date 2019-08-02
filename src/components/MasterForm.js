import React, {Component} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

class MasterForm extends Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      username: '',
      password: '',
      banana: ''
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)

    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(name, value);
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password, banana } = this.state
    alert(`Your registration detail: \n
      Email: ${email} \n
      Username: ${username} \n
      Password: ${password} \n
      Banana: ${banana} `)
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click

  _next() {
    let currentStep = this.state.currentStep
    {/* If the current step is 1 or 2, then add one on "next" button click */}
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    {/* If the current step is 2 or 3, then subtract one on "previous" button click */}
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
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
          className="btn btn-secondary"
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
    {/* If the current step is not 3, then render the "next" button */}
    if (currentStep <3) {
      return (
        <button
          className="btn btn-primary float-right"
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
        <div className="container">
          <h1>A Wizard Form!</h1>
          <p>Step {this.state.currentStep} </p>

          <form onSubmit={this.handleSubmit}>
            {/* Render the form steps and pass in the required props */}
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
              banana={this.state.banana}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
            />

            {this.previousButton}
            {this.nextButton}

          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default MasterForm
