import * as React from 'react';
import Document from '../components/Document';
import ColumnLayout from '../components/ColumnLayout';
import AuthLoginForm from '../components/AuthLoginForm';
import AuthSignupForm from '../components/AuthSignupForm';
import NavPublic from '../components/NavPublic';
import PostList from '../components/PostList';
import NavAuthenticated from '../components/NavAuthenticated';
import * as Text from '../components/Text';
import withData from '../higher-order/withData';
import { Row, Column } from 'react-foundation';

class Index extends React.Component {
  renderLoggedIn = () => {
    return [
      <NavAuthenticated key="navigation" />,
      <ColumnLayout key="layout">
        <PostList posts={this.props.posts} />
      </ColumnLayout>,
    ];
  };

  renderLoggedOut = () => {
    return [
      <NavPublic key="navigation" />,
      <ColumnLayout key="layout">
        <Text.PageTitle style={{textAlign: 'center', fontSize: '28px' }}><h1>E.A.T.</h1></Text.PageTitle>
        <Text.Paragraph style={{textAlign: 'center', fontSize: '20px' }}>
          <b>E</b>ngineering <b>A</b>nalysis <b>T</b>ool
        </Text.Paragraph>
        <Text.Paragraph style={{textAlign: 'center'}}>
          This tool is built to allow users to interact with and submit a technical skills analysis <br />
        </Text.Paragraph>
        <Text.Paragraph>
          <h2>What does a technical skills analysis provide? </h2>
          1. A skills analysis helps establish a detailed assessment of individual employee’s capabilities. <br />
          2. A summary of the team’s capabilities - identify gaps or weaknesses. <br />
          3. A clear definition of how skills are rated to guide employee development.
        </Text.Paragraph>
        <div style={{display: 'flex'}}>
          <div style={{flex: "1 1 auto"}}>
            <Text.PageTitle>Log in</Text.PageTitle>
            <AuthLoginForm style={{ marginBottom: 24 }} />
          </div>
          <div style={{flex: "1 1 auto"}}>
            <Text.PageTitle>Create an account</Text.PageTitle>
            <AuthSignupForm style={{ marginBottom: 24 }} />
          </div>
        </div>


        <Text.Paragraph>
          <h2>Accreditation</h2>
          This tool is built upon the next-postgres framework.
          <Text.Anchor
              target="blank"
              href="https://github.com/jimmylee/next-postgres"
          >
            View next-postgres on GitHub
          </Text.Anchor>. The framework uses React + NextJS in combination with a Postgres DB.<br />
          The tool also makes use of <a href="https://medium.engineering" target="_blank">Medium's</a> Engineering Growth Framework. .
          Learn about the <a href="https://medium.com/s/engineering-growth-framework" target="_blank">growth framework</a>.
          Get the <a href="https://github.com/Medium/snowflake" target="_blank">source code</a>.
          Read the <a href="https://medium.com/p/85e078bc15b7" target="_blank">terms of service</a>.
        </Text.Paragraph>
      </ColumnLayout>,
    ];
  };

  render() {
    let subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, state => state)(Index);
