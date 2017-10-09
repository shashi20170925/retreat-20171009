import React, { Component } from 'react';
import UserDetails from './UserDetails';
class Content extends Component {
  render() {
    return (
      <div>
          <h1>Content Component</h1>
          <UserDetails userName={"Gary"}/>
      </div>
    );
  }
}
export default Content;
