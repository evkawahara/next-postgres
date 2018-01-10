import React from 'react';
import Textarea from '../components/Textarea';
import ButtonText from '../components/ButtonText';
import Document from '../components/Document';
import CommentPreview from '../components/CommentPreview';
import ColumnLayout from '../components/ColumnLayout';
import CommentForm from '../components/CommentForm';
import PostLockup from '../components/PostLockup';
import Nav from '../components/Nav';
import NavPublic from '../components/NavPublic';
import withData from '../higher-order/withData';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

class Post extends React.Component {
  state = {
    isEditing: false,
    content: this.props.post ? this.props.post.content : undefined,
    title: this.props.post ? this.props.post.title : undefined,
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({
      isEditing: false,
      content: this.props.post.content,
      title: this.props.post.title,
    });
  };

  _handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdatePost({
        postId: this.props.post.id,
        content: this.state.content,
        title: this.state.title,
      })
    );
  };

  _handleDelete = () => {
    this.props.dispatch(Actions.requestDeletePost(this.props.post.id));
  };

  render() {
    const navigation = !this.props.isAuthenticated ? <NavPublic /> : <Nav />;

    const { post, viewer } = this.props;
    if (!post) {
      return (
        <Document>
          {navigation}
          <ColumnLayout>
            <h1 className="title">Post not found</h1>
          </ColumnLayout>
        </Document>
      );
    }

    const { isEditing } = this.state;
    const isEditable = viewer && viewer.id === post.user.id;

    const commentForm = this.props.isAuthenticated ? (
      <CommentForm postId={post.id} title="Reply to this post" placeholder="Leave a comment..." />
    ) : (
      <div>
        To leave a comment, <a href="/">log in or create an account</a>.
      </div>
    );

    const maybeCommentElements = this.props.post.comments
      .filter(c => {
        return !c.commentId;
      })
      .map(c => <CommentPreview key={`cmmt-${c.id}`} {...c} />);

    return (
      <Document>
        {navigation}
        <ColumnLayout>
          {isEditable ? (
            <div>
              {!isEditing ? (
                <ButtonText onClick={this._handleEdit}>Edit Post</ButtonText>
              ) : (
                undefined
              )}
              {isEditing ? <ButtonText onClick={this._handleCancel}>Cancel</ButtonText> : undefined}
              {isEditing ? <ButtonText onClick={this._handleSave}>Save</ButtonText> : undefined}
              <ButtonText onClick={this._handleDelete}>Delete</ButtonText>
            </div>
          ) : (
            undefined
          )}
          {isEditing ? (
            <Textarea
              value={this.state.title}
              placeholder="Optional title"
              fontWeight={600}
              lineHeight="2.8rem"
              fontSize="2.618rem"
              onChange={this._handleTitleChange}
            />
          ) : (
            <h1 className="title">{this.state.title}</h1>
          )}
          <PostLockup
            commentLength={post.comments.length}
            createdAt={post.createdAt}
            username={post.user.username}
          />
          {isEditing ? (
            <Textarea
              value={this.state.content}
              placeholder="Start writing..."
              onChange={this._handleContentChange}
            />
          ) : (
            undefined
          )}
          {!isEditing ? <p>{this.state.content}</p> : undefined}
          {!isEditing ? <div>{maybeCommentElements}</div> : undefined}
          {!isEditing ? commentForm : undefined}
        </ColumnLayout>
      </Document>
    );
  }
}

export default withData({}, state => state)(Post);
