import React from 'react';
import UserPreview from '../components/UserPreview';

export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map(user => <UserPreview key={`user-${user.id}`} user={user} />);

    return <div>{users}</div>;
  }
}
