import React, { Component } from 'react';
import Login from './Login';
import Landing from './Landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cognitoAuthenticated: false
    };

    this.loginLogoutCallback = this.loginLogoutCallback.bind(this);
  }

  loginLogoutCallback() {
    this.setState({ cognitoAuthenticated: window.checkAuthenticatedStatus() })
  }

  componentWillMount() {
    this.setState({ cognitoAuthenticated: window.checkAuthenticatedStatus() })
  }

  render() {
    const currentWindow = !this.state.cognitoAuthenticated ?
      <Login callbackFromParent={this.loginLogoutCallback} /> :
      <Landing callbackFromParent={this.loginLogoutCallback} />;

    return (
      <div>
        {currentWindow}
      </div>
    );
  }
}

export default App;
