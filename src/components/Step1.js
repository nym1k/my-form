import React from 'react'

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <table>
          <tbody>
            <tr>
              <td><input type="radio" name="banana"
                         value="one"
                         checked={this.props.banana === "one"}
                         onChange={this.props.handleChange} />One</td>
              <td><input type="radio" name="banana"
                         value="two"
                         checked={this.props.banana === "two"}
                         onChange={this.props.handleChange} />two</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default Step1
