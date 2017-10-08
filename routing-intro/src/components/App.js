import React, { Component } from 'react';
import Header  from './Header';
import Footer  from './Footer';
//import Content  from './Content';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
