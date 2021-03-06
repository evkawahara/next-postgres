import * as React from 'react';
import PropTypes from 'prop-types';
import Border from '../components/Border';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import * as Actions from '../common/actions';
import * as Text from '../components/Text';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
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
        <header style={{ margin: '16px 0 16px 0' }}>
          <Text.PageTitle>{this.props.title}</Text.PageTitle>
          <div>
            {this.props.isReplying ? (
              <Button onClick={this.props.onCancel}>Cancel</Button>
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
            fontSize="16px"
            onChange={this._handleContentChange}
          />
          <div>
            <Button onClick={this._handleSend}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CommentForm);
