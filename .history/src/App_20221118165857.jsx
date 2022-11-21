import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import appRoute from './router'
import './utils/rem'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          {
            appRoute.map(routeObj => <Route path={routeObj.path} element key={routeObj.path} />)
          }
        </Routes>
      </div>
    )
  }
}

