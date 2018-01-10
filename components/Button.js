import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: () => {},
  };

  render() {
    return (
      <button style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
