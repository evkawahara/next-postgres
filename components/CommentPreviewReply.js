import * as React from 'react';
import CommentPreviewHeader from '../components/CommentPreviewHeader';
import LabelBold from '../components/LabelBold';
import * as Text from '../components/Text';
import * as Strings from '../common/strings';
import styled from 'react-emotion';

const CommentReplyContainer = styled('div')`
  border-left: 1px dashed #ececec;
  padding-left: 16px;
`;

export default class CommentPreviewReply extends React.Component {
  render() {
    return (
      <CommentReplyContainer>
        <CommentPreviewHeader
          isEditing={this.props.isEditing}
          isEditable={this.props.isEditable}
          onDelete={this.props.onDelete}
          viewer={this.props.viewer}>
          <LabelBold>{this.props.username} </LabelBold>commented on
          <LabelBold> {Strings.toDate(this.props.createdAt)}</LabelBold>
        </CommentPreviewHeader>
        <Text.PostBody style={{ margin: '16px 0 16px 0' }}>{this.props.children}</Text.PostBody>
      </CommentReplyContainer>
    );
  }
}
