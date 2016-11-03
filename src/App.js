import React, { Component } from 'react';
import { If, Then, Else } from 'react-if'

const logo = '//d2t498vi8pate3.cloudfront.net/assets/home-header-logo-8d37f4195730352f0055d39f7e88df602e2d67bdab1000ac5886c5a492400c9d.png';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      correctPassage: '',
      errorPassage: '',
      errors: [],
      stageOneEnabled: true,
      stageOneVisible: true,
      stageTwoEnabled: false,
      stageTwoVisible: false,
      stageThreeEnabled: false,
      stageThreeVisible: false
    }

    this.handleCorrectPassageChange = this.handleCorrectPassageChange.bind(this)
    this.handleCorrectPassageSubmit = this.handleCorrectPassageSubmit.bind(this)

  }

  handleCorrectPassageChange(event) {
    this.setState({ correctPassage: event.target.value })
  }

  handleCorrectPassageSubmit(event) {
    this.setState({
      stageOneEnabled: false,
      stageTwoEnabled: true,
      stageTwoEnabled: true
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
          <If condition={ this.state.stageOneVisible }>
            <Then>
              <If condition={ this.state.stageOneEnabled }>
                <Then>
                  <div className="stageOne">
                    <textarea
                      placeholder="Write passage here..."
                      value={ this.state.correctPassage }
                      onChange={ this.handleCorrectPassageChange }
                    ></textarea>
                    <button
                      onClick={ this.handleCorrectPassageSubmit }
                    >
                      Next
                    </button>
                  </div>
                </Then>
              <Else>
                <div className="stageOne">
                  <textarea disabled
                    value={ this.state.correctPassage }
                  ></textarea>
                  <button disabled>Next</button>
                </div>
              </Else>
              </If>
            </Then>
          </If>
        </div>
      </div>
    )
  }
}

export default App;
