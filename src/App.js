import React, { Component } from 'react'
import Weather from './component/Weather'
import { Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/weather' element={<Weather></Weather>}></Route>
          </Routes>
      </div>
    )
  }
}
