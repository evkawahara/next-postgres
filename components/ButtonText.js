import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonText extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
  };

  static defaultProps = {
    onClick: () => {},
  };

  render() {
    return (
      <span className="item" style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </span>
    );
  }
}
