import React, { Component } from 'react';
import { If, Else, Then } from 'react-if'

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
      stageThreeVisible: false,
      notifications: []
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
    if (this.state.correctPassage) {
      this.setState({
        stageOneEnabled: false,
        stageTwoEnabled: true,
        stageTwoVisible: true,
        notifications: []
      })
    } else {
      this.setState({notifications: ["Please enter a grammatically correct passage."]})
    }
  }

  handleErrorPassageChange(event) {
    this.setState({ errorPassage: event.target.value })
  }

  handleErrorPassageSubmit(event) {
    if (this.state.errorPassage && (this.state.errorPassage !== this.state.correctPassage)) {
      this.setState({
        errors: findErrors(this.state.correctPassage, this.state.errorPassage),
        stageTwoEnabled: false,
        stageThreeEnabled: true,
        stageThreeVisible: true,
        notifications: []
      })
    } else {
      this.setState({
        notifications: ["Please add grammatical errors to this passage."]
      })
    }
  }

  handleErrorAssignment(event) {
    this.setState({
      errorsWithConcepts: {...this.state.errorsWithConcepts, [event.target.name]: event.target.value }
    })
  }

  handleCompletion(event) {
    this.setState({
      stageThreeEnabled: false,
      notifications: ["You're all done!"]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Quill Web Dev Challenge</h2>
        </div>

        <If condition={this.state.notifications}>
          <Then>
            <ul className="notifications">
              {this.state.notifications.map((notification, i) => {
                return <li key={i}>{notification}</li>
              })}
            </ul>
          </Then>
        </If>

        <div className="interface">
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

          <If condition={this.state.stageThreeVisible}>
            <Then>
              <div className="stage-three">
                <p className="stage-heading">Grammatical Error Assignment</p>
                <ul className="errors">
                  {this.state.errors.map((error, i) => {
                    const savedConcept = this.state.errorsWithConcepts[error]
                    return <Error
                      enabled={this.state.stageThreeEnabled}
                      onChange={this.handleErrorAssignment}
                      error={error}
                      key={i}
                      savedValue={savedConcept}
                    />
                  })}
                </ul>
                <If condition={this.state.stageThreeEnabled}>
                  <Then><button onClick={this.handleCompletion}>Done</button></Then>
                  <Else><button disabled>Done</button></Else>
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
