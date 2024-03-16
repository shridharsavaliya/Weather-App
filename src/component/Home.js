import React, { Component } from 'react'
import img from "../img/weather.jpg"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='container mt-5'>
            <div className='row w-100 mx-auto bg-light p-4'>
                <div className='col-xl-6 align-content-center d-grid'>
                    <h1>Weather & Forecast Application</h1>
                    <p className='fs-5'>Use Weather Application and get weather information daily and daily Download weather forecast for free and experience</p>
                    <button className='btn btn-secondary text-light w-50 mb-3'>Download Now</button>
                </div>
                <div className='col-xl-6'>
                    <img src={img} alt="weather img" className='img-fluid' />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
