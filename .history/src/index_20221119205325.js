import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'antd-mobile/es/global'
import 'lib-flexible'
import App from './App'
import './utils/rem'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
