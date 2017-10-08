import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav id="myNavbar" className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">More on Components</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav">
                <li className="active"><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
    );
  }
}

export default Header;
