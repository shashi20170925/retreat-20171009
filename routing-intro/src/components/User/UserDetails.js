import React, { Component } from 'react';
import { BrowserRouter, Route,Switch ,Link } from 'react-router-dom'
class UserDetails extends Component {
  render() {
    return (
      <div className="container">
          <h2>UserDetails Component </h2>
          <br/>
          <h3>Displaying user details with userID as param {this.props.match.params.id} </h3>
          <div> <p>Click <Link to={"/home"}> Here </Link> to navigate to UserDetails

          </p></div>
<br/><br/>
            <h3>Displaying user details with query string {this.props.location.search} </h3>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
  }
}

export default UserDetails;
