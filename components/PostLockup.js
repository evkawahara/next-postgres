import React from 'react';
import * as Strings from '../common/strings';

export default class PostLockup extends React.Component {
  render() {
    return (
      <aside>
        <p>
          💬 {this.props.commentLength} {Strings.pluralize('comment', this.props.commentLength)}  📝{' '}
          <span>{Strings.toDate(this.props.createdAt)}</span> by <span>{this.props.username}</span>
        </p>
      </aside>
    );
  }
}
