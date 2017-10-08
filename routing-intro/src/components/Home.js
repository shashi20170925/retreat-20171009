import React, { Component } from 'react';
import { BrowserRouter, Route,Switch ,Link } from 'react-router-dom'

import UserDetails from './User/UserDetails';
class Home extends Component {
  render() {  
    return (
      <div className="container">
          <h1>Home Component</h1>

          <Route path='/home/user/:id' component={UserDetails}/>

</div>
    );
  }
}

export default Home;
