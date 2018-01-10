import React from 'react';

export default class BoxHeaderLayout extends React.Component {
  render() {
    const { style } = this.props;

    return (
      <header style={style}>
        <div>{this.props.children}</div>
        <div>{this.props.right}</div>
      </header>
    );
  }
}
