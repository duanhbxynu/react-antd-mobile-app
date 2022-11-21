import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'antd-mobile/es/global'
import 'lib-flexible'
import App from './App'
import './utils/rem'

const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, container
)
