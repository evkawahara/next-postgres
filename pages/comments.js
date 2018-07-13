import * as React from 'react';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import UserList from '../components/UserList';
import NavPublic from '../components/NavPublic';
import NavAuthenticated from '../components/NavAuthenticated';
import withData from '../higher-order/withData';
import Button from '../components/Button';
import * as Actions from '../common/actions';


import SnowflakeApp from '../components/SnowflakeApp'


class Snowflake extends SnowflakeApp {
  state = {
    ratingData: undefined,
  };

  _handleSave = () => {
    console.log(this.state);

    //var ratingString = this.props.url.asPath.split('#')[1];
    //console.log(ratingString);
    this.props.dispatch(
        Actions.requestUpdateRating(this.state.ratingData)
    );
  };

  _myCallback = (dataFromChild) => {
    this.setState({
      ratingData: dataFromChild
    });
    console.log(this.props)
  };

  render() {
    var finalPost = undefined;

    let navigation = !this.props.isAuthenticated ? <NavPublic /> : <NavAuthenticated />;

    if(!this.props.isAuthenticated) {
      return (

          <Document>
            {navigation}
            <div>
              <br />
              <br />
              <h1 style={{textAlign: 'center'}}>Please sign in first!</h1>
            </div>
          </Document>
      );
    }

    if (this.props.posts) {
      const listOfPosts = this.props.posts.filter(p => p.userId == this.props.viewer.id);
      listOfPosts.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });

      finalPost = listOfPosts[0];
      console.log("EVAN final post");
      console.log(finalPost);

    }

    return (

        <Document>
          {navigation}
          <div>
            <SnowflakeApp posts={finalPost} callbackFromParent={this._myCallback}/>
          </div>
          <div>
            <Button onClick={this._handleSave}>Save</Button>
          </div>
        </Document>
    );
  }
}

export default withData({}, state => state)(Snowflake);
