import React from 'react';
import { connect } from 'react-redux';
import ButtonText from '../components/ButtonText';
import BoxHeaderLayout from '../components/BoxHeaderLayout';
import * as Strings from '../common/strings';
import * as Actions from '../common/actions';

class UserPreview extends React.Component {
  _handleDelete = () => {
    this.props.dispatch(Actions.viewerDelete());
  };

  render() {
    const isViewer = this.props.viewer && this.props.user.id === this.props.viewer.id;

    return (
      <div style={this.props.style}>
        <BoxHeaderLayout>
          <span> {this.props.user.username}</span>
        </BoxHeaderLayout>
        <div>
          Joined on {Strings.toDate(this.props.user.createdAt)}
          {isViewer ? (
            <div>
              <ButtonText onClick={this._handleDelete}>Delete your account</ButtonText>
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return { viewer: state.viewer };
})(UserPreview);
