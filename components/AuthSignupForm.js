import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';

class AuthSignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    verify: '',
  };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    this.props.dispatch(Actions.requestSignup(this.state));
  };

  render() {
    return (
      <div>
        <Input
          label="Username"
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <hr />
        <Input
          label="Password"
          value={this.state.password}
          name="password"
          type="password"
          onChange={this._handleChange}
        />
        <hr />
        <Input
          label="Verify your password"
          value={this.state.verify}
          name="verify"
          type="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <hr />
        <Button onClick={this._handleSubmit}>Sign up</Button>
      </div>
    );
  }
}

export default connect(state => state)(AuthSignupForm);
