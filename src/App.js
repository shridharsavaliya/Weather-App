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
            <Route path='/' element={<Weather></Weather>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
          </Routes>
      </div>
    )
  }
}
