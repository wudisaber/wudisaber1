import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import "./assets/css/common.css"
import "./rem/rem"
import "./fonts/iconfont.css"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
serviceWorker.unregister();
