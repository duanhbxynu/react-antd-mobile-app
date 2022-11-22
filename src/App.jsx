import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import appRoute from '@/router'
import NotFound from '@/pages/NotFound'

import './App.css'

export default class App extends Component {
  render() {
    // const Redirect = ({ location }) => <NotFound to='/404' />
    return (
      <div>
        <Routes>
          {
            appRoute.map(routeObj => <Route path={routeObj.path} element={routeObj.component} key={routeObj.path} />)
          }
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    )
  }
}

