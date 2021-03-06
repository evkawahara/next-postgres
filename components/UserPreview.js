import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import BorderedItem from '../components/BorderedItem';
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
          <strong>{this.props.user.username}</strong>
        </BoxHeaderLayout>
        <BorderedItem>
          Joined on {Strings.toDate(this.props.user.createdAt)}
          {isViewer ? (
            <div>
              <Button onClick={this._handleDelete}>Delete your account</Button>
            </div>
          ) : (
            undefined
          )}
        </BorderedItem>
      </div>
    );
  }
}

export default connect(state => {
  return { viewer: state.viewer };
})(UserPreview);
