import React from 'react'

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-step">
        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Research Project</strong></div>
            <div class="card-body">
              <div className="form-group">
                <label htmlFor="researchProjectTitle">Title of current research project: <br/><small class="text-muted">(maximum 25 words)</small></label>
                <input
                  className="form-control"
                  name="researchProjectTitle"
                  type="text"
                  value={this.props.researchProjectTitle}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Talk/Poster</strong></div>
            <div class="card-body">

              <div className="form-group">
                <label htmlFor="talkTitle">Title of talk/poster: <br/><small class="text-muted">(Maximum 20 words)</small></label>
                <input
                  className="form-control"
                  name="talkTitle"
                  type="text"
                  value={this.props.talkTitle}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="shortTalkTitle">Talk/poster short title: <br/><small class="text-muted">(Maximum 5 words)</small></label>
                <input
                  className="form-control"
                  name="shortTalkTitle"
                  type="text"
                  value={this.props.shortTalkTitle}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="card">
            <div class="card-header"><strong>Details of Talk/Poster</strong></div>
            <div class="card-body">

              <div className="form-group">
                <label htmlFor="talkQuestion">What conservation problem or question does your talk/poster address? <br/><small class="text-muted">(Maximum 50 words)</small></label>
                <textarea
                  className="form-control"
                  name="talkQuestion"
                  value={this.props.talkQuestion}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="researchMethods">What were the main research methods you used? <br/><small class="text-muted">(Maximum 50 words)</small></label>
                <textarea
                  className="form-control"
                  name="researchMethods"
                  value={this.props.researchMethods}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="importantResults">What are your most important results? <br/><small class="text-muted">(Maximum 50 words)</small></label>
                <textarea
                  className="form-control"
                  name="importantResults"
                  value={this.props.importantResults}
                  onChange={this.props.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="relevanceOfResults">What is the relevance of your results to conservation? <br/><small class="text-muted">(Maximum 50 words)</small></label>
                <textarea
                  className="form-control"
                  name="relevanceOfResults"
                  value={this.props.relevanceOfResults}
                  onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Step3
