import * as React from 'react';
import Link from '../components/Link';
import NavLayout from '../components/NavLayout';
import * as Actions from '../common/actions';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

const linkStyles = css`
  display: inline-block;
  font-weight: 600;
  font-family: Courier, monospace;
  cursor: pointer;
  text-decoration: none;
  color: #000020;

  &:visited {
    color: #000020;
  }

  &:hover {
    color: #0000ff;
    text-decoration: underline;
  }
`;

class Nav extends React.Component {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return (
      <NavLayout>
        <Link className={linkStyles} href="/comments" style={{ marginRight: '16px' }}>
          » Tech Matrix
        </Link>
        <Link className={linkStyles} onClick={this._handleLogout} style={{ marginRight: '16px' }}>
          » Log out
        </Link>
      </NavLayout>
    );
  }
}

export default connect(state => state)(Nav);
