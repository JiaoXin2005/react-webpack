import React from 'react'
import ReactDOM from 'react-dom'
import getRouter from './router/router.js'

import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
