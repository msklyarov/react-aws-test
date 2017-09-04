import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    window.login(this.username.value, this.password.value)
      .then(this.props.callbackFromParent);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="form-horizontal col-md-4">
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="username">
              Username
            </label>
            <div className="col-md-8">
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="username"
                minLength="3"
                maxLength="20"
                size="20"
                required
                ref={(input) => { this.username = input; }}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="password">
              Password
            </label>
            <div className="col-md-8">
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="password"
                minLength="3"
                maxLength="20"
                size="20"
                required
                ref={(input) => { this.password = input; }}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-md-8">
              <button type="submit" className="btn btn-default">login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
