import React from 'react';
import Link from '../components/Link';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

export default class NavLayout extends React.Component {
  render() {
    return (
      <nav>
        <div>{this.props.children}</div>
      </nav>
    );
  }
}
