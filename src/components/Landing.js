import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataIdentity: '',
      dataIdentityIAm: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    window.logout()
      .then(this.props.callbackFromParent);
  }


  componentWillMount() {
    window.getIdentity()
      .then((data) => {
        console.log('data', data);
        this.setState({ dataIdentity: data })
      });
    window.getIdentityIAm()
      .then((data) => {
        console.log('data', data);
        this.setState({ dataIdentityIAm: data })
      });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="form-horizontal col-md-6">
          <div>{this.state.dataIdentity}</div>
          <hr />
          <div>{this.state.dataIdentityIAm}</div>
          <hr />
          <div className="form-group">
            <div className="col-sm-offset-0 col-md-6">
              <button type="submit" className="btn btn-default">signout</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Landing;
