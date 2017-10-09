import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content'
import App from './components/App';

  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Route path='/' component={Content} />
      </App>
    </BrowserRouter>, document.getElementById('root'));
