import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import appRoute from './router'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          {
            appRoute.map(routeObj => <Route path={routeObj.path} element={routeObj.component} key={routeObj.path} />)
          }
        </Routes>
      </div>
    )
  }
}

