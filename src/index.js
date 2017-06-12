import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import {  } from 'react-router-dom'

ReactDOM.render((
  <App />
), document.getElementById('root'))

registerServiceWorker();
