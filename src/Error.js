import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <li>
        {this.props.error}
        <select>
          <option disabled selected hidden>Select Option</option>
          <option>Articles</option>
          <option>Commas</option>
          <option>Proper Nouns</option>
        </select>
      </li>
    )
  }
}

export default Error
