import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './router'
import './utils/rem'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route>
          {
            routes.map()
          }
        </Route>
      </div>
    )
  }
}

