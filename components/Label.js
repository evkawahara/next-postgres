import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <label>{this.props.children}</label>;
  }
}
