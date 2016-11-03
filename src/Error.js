import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <li>
        {this.props.error}
        <select onChange={this.props.onChange} name={this.props.error}>
          <option disabled selected hidden>Select Option</option>
          <option value="Articles">Articles</option>
          <option value="Commas">Commas</option>
          <option value="Proper Nouns">Proper Nouns</option>
        </select>
      </li>
    )
  }
}

export default Error
