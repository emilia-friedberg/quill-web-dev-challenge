import React, { Component } from 'react';
import { If, Then } from 'react-if'

const logo = '//d2t498vi8pate3.cloudfront.net/assets/home-header-logo-8d37f4195730352f0055d39f7e88df602e2d67bdab1000ac5886c5a492400c9d.png';
import './App.css';
import Error from './Error'
import TextField from './TextField'
import findErrors from './findErrors'

class App extends Component {
  constructor() {
    super()

    this.state = {
      correctPassage: '',
      errorPassage: '',
      errors: [],
      errorsWithConcepts: {},
      stageOneEnabled: true,
      stageOneVisible: true,
      stageTwoEnabled: false,
      stageTwoVisible: false,
      stageThreeEnabled: false,
      stageThreeVisible: false
    }

    this.handleCorrectPassageChange = this.handleCorrectPassageChange.bind(this)
    this.handleCorrectPassageSubmit = this.handleCorrectPassageSubmit.bind(this)
    this.handleErrorPassageChange = this.handleErrorPassageChange.bind(this)
    this.handleErrorPassageSubmit = this.handleErrorPassageSubmit.bind(this)
    this.handleErrorAssignment = this.handleErrorAssignment.bind(this)
    this.handleCompletion = this.handleCompletion.bind(this)
  }

  handleCorrectPassageChange(event) {
    this.setState({ correctPassage: event.target.value })
  }

  handleCorrectPassageSubmit(event) {
    this.setState({
      stageOneEnabled: false,
      stageTwoEnabled: true,
      stageTwoVisible: true
    })
  }

  handleErrorPassageChange(event) {
    this.setState({ errorPassage: event.target.value })
  }

  handleErrorPassageSubmit(event) {
    this.setState({
      errors: findErrors(this.state.correctPassage, this.state.errorPassage),
      stageTwoEnabled: false,
      stageThreeEnabled: true,
      stageThreeVisible: true
    })
  }

  handleErrorAssignment(event) {
    this.setState({
      errorsWithConcepts: {...this.state.errorsWithConcepts, [event.target.name]: event.target.value }
    })
  }

  handleCompletion(event) {
    this.setState({
      stageThreeEnabled: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Quill Web Dev Challenge</h2>
        </div>

        <div className="interface">
          <div className="passages-container">
            <If condition={this.state.stageOneVisible}>
              <Then>
                <TextField
                  className="stage-one"
                  enabled={this.state.stageOneEnabled}
                  heading="Grammatically Correct Passage"
                  placeholder="Write passage here..."
                  value={this.state.correctPassage}
                  onChange={this.handleCorrectPassageChange}
                  onClick={this.handleCorrectPassageSubmit}
                />
              </Then>
            </If>

            <If condition={this.state.stageTwoVisible}>
              <Then>
                <TextField
                  className="stage-two"
                  enabled={this.state.stageTwoEnabled}
                  defaultValue={this.state.correctPassage}
                  heading="Passage With Grammatical Errors"
                  onChange={this.handleErrorPassageChange}
                  onClick={this.handleErrorPassageSubmit}
                  text={this.state.errorPassage}
                />
              </Then>
            </If>
          </div>

          <If condition={this.state.stageThreeVisible}>
            <Then>
              <div className="stage-three">
                <p>Grammatical Error Assignment</p>
                <ul className="errors">
                  {this.state.errors.map((error, i) => {
                    return <Error
                      enabled={this.stageThreeEnabled}
                      onChange={this.handleErrorAssignment}
                      error={error}
                      key={i}
                    />
                  })}
                </ul>
                <If condition={this.state.stageThreeEnabled}>
                  <button onClick={this.handleCompletion}>Done</button>
                </If>
              </div>
            </Then>
          </If>
        </div>
      </div>
    )
  }
}

export default App;
