import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App';
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Route path='/' component={App} />
      </App>
    </BrowserRouter>, document.getElementById('root'));
