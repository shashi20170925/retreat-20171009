import React, { Component } from 'react';
import {NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="bs-example">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="navbar-brand">Simple Navigation with React Router </div>
                        </div>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                              <li><NavLink activeClassName="liSelected" to={"/home"}>Home</NavLink></li>
                              <li><NavLink activeClassName="liSelected" to={"/about"}>About us</NavLink></li>
                                <li><NavLink activeClassName="liSelected" to={"/contact"}>Contact US</NavLink></li>

                            </ul>
                            <form className="navbar-form navbar-left">
                              <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
    );
  }
}

export default Header;
