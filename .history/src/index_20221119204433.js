import React from 'react'
import {ReactDOM} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'antd-mobile/es/global'
import 'lib-flexible'
import App from './App'
import './utils/rem'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
