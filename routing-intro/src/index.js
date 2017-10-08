import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route,Switch,Redirect } from 'react-router-dom'
import App from './components/App';
import About  from './components/About';
import Home from './components/Home';
import ContactUs  from './components/ContactUs';

import NoRouteFound  from './components/NoRouteFound';
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={ContactUs} />
        {/* <Redirect exact from='/' to="/home" />
        <Route component={NoRouteFound}/> */}
        </Switch>
      </App>
    </BrowserRouter>, document.getElementById('root'));
