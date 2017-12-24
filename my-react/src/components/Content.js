import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch'
import PropTypes from 'prop-types';

export default class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div>
        <p style={{color: this.props.themeColor}}>
          React.js 小书内容
        </p>
        <ThemeSwitch themeColor={this.props.themeColor} onSwitchColor={this.props.onSwitchColor}></ThemeSwitch>
      </div>
    )
  }
}
