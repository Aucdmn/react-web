import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { FontStyle } from  './statics/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
    <FontStyle />
  </Fragment>
  ,
  document.getElementById('root')
);


