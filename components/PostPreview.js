import React from 'react';
import ButtonText from '../components/ButtonText';
import PostLockup from '../components/PostLockup';
import { connect } from 'react-redux';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';

export default class PostPreview extends React.Component {
  _handleViewPost = id => {
    window.location.href = `/post/${id}`;
  };

  render() {
    const { post } = this.props;
    return (
      <div onClick={() => this._handleViewPost(post.id)}>
        <h1>{post.title ? post.title : 'untitled'}</h1>
        <PostLockup
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        <p>
          {Strings.elide(post.content, 256)}
          <br />
          <br />
          <ButtonText>Read more...</ButtonText>
        </p>
      </div>
    );
  }
}
