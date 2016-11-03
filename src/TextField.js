import React, { Component } from 'react';
import { If, Then, Else } from 'react-if'

class TextField extends Component {
  render() {
    return (
      <If condition={this.props.enabled} >
        <Then>
          <div className={this.props.className}>
            <textarea
              placeholder={this.props.placeholder}
              defaultValue={this.props.defaultValue}
              value={this.props.value}
              onChange={this.props.onChange}
            />
            <button
              onClick={this.props.onClick}
            >
              Next
            </button>
          </div>
        </Then>
        <Else>
          <div className={this.props.className}>
            <textarea disabled
              value={ this.props.value || this.props.text }
            ></textarea>
            <button disabled>Next</button>
          </div>
        </Else>
      </If>
    )
  }
}

export default TextField
