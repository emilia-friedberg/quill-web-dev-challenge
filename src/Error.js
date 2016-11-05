import React, { Component } from 'react';
import { If, Else, Then } from 'react-if'

class Error extends Component {
  render() {
    return (
      <If condition={this.props.enabled}>
        <Then>
          <li>
            {this.props.error}
            <select onChange={this.props.onChange} name={this.props.error}>
              <option disabled selected hidden>Select Option</option>
              <option value="Articles">Articles</option>
              <option value="Commas">Commas</option>
              <option value="Proper Nouns">Proper Nouns</option>
            </select>
          </li>
        </Then>
        <Else>
        <li>
          {this.props.error}
          <select>
            <option disabled selected>{this.props.savedValue}</option>
          </select>
        </li>
        </Else>
      </If>
    )
  }
}

export default Error
