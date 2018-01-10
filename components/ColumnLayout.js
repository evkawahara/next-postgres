import React from 'react';

export default class ColumnLayout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
