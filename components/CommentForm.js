import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../components/Textarea';
import ButtonText from '../components/ButtonText';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';
import { DeleteIcon } from '../common/svg';

class CommentList extends React.Component {
  static defaultProps = {
    postId: PropTypes.string,
    commentId: PropTypes.string,
    title: PropTypes.string,
  };

  state = {
    content: '',
  };

  _handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  _handleSend = e => {
    const data = {
      commentId: this.props.commentId,
      content: this.state.content,
      postId: this.props.postId,
    };

    if (this.props.commentId) {
      return this.props.dispatch(Actions.requestSaveReply(data));
    }

    return this.props.dispatch(Actions.requestSaveComment(data));
  };

  render() {
    return (
      <div>
        <header>
          <div>{this.props.title}</div>
          <div>
            {this.props.isReplying ? (
              <DeleteIcon interactionStyle onClick={this.props.onCancel} />
            ) : (
              undefined
            )}
          </div>
        </header>
        <div>
          <Textarea
            autoFocus={this.props.autoFocus}
            label="comment"
            placeholder={this.props.placeholder}
            value={this.state.content}
            onChange={this._handleContentChange}
          />
          <div>
            <ButtonText onClick={this._handleSend}>Submit</ButtonText>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CommentList);
