import React, { Component } from 'react';
class UserDetails extends Component {
  //Will get props from the parent 
  render() {
    return (
      <div>
          <h1>UserDetails Component </h1>
          <br/>  
          <p>User name sent from parent : {this.props.userName} </p>
      </div>
    );
  }
}
export default UserDetails;
