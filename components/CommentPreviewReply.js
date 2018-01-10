import React from 'react';
import CommentPreviewHeader from '../components/CommentPreviewHeader';
import * as Strings from '../common/strings';

export default class CommentPreviewReply extends React.Component {
  render() {
    return (
      <div>
        <CommentPreviewHeader
          isEditing={this.props.isEditing}
          isEditable={this.props.isEditable}
          onDelete={this.props.onDelete}
          viewer={this.props.viewer}>
          <span>{this.props.username} </span>commented on
          <span> {Strings.toDate(this.props.createdAt)}</span>
        </CommentPreviewHeader>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
