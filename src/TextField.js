import React, { Component } from 'react';
import { If, Then, Else } from 'react-if'

class TextField extends Component {
  render() {
    return (
        <If condition={this.props.enabled} >
          <Then>
            <div className={this.props.className}>
            <p className="stage-heading">{this.props.heading}</p>
              <textarea
                className="passage"
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
              <p className="stage-heading">{this.props.heading}</p>
              <textarea
                disabled
                className="passage"
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
