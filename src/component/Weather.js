import React, { Component } from 'react'
import Result from './Result'
import Search from './Search'
import axios from 'axios'
import Recentdata from './Recentdata'

export default class Weather extends Component {
  constructor() {
    super()

    this.state = {
      lat: '',
      lon: '',
      weatherdata: null,
      city: "",
      loading: false,
      recent:[]
    }
  }

  dataSearchHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=3a4cc46f2a13413240e17078399add63`)
      .then((res) => {
        this.setState({
          city: res.data.name,
          weatherdata: res.data
        },()=>{
          this.addrecentHandler()
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  dataChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    });
  }

  locationHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);

          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude
            })
            const { latitude, longitude } = res.coords

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=3a4cc46f2a13413240e17078399add63`)
              .then((res) => {
                this.setState({
                  city: res.data.name,
                  weatherdata: res.data,
                  loading: false

                },()=>{
                  this.addrecentHandler()
                })

              })
              .catch((err) => {
                console.log(err)
              })
          }, 1000)
        },
        (err) => {
          console.log(err)
        }
      )
    }
    else {
      console.log("data not support....");
    }
  }

  addrecentHandler = () =>{
    const recent = this.state.recent;
    recent.push({
      city:this.state.city,
      lat:this.state.lat,
      lon:this.state.lon
    })
    this.setState({
        recent
    },()=>{})
  }
  dataResearchHandler = (lat,lon) => {
    this.setState({lat,lon},()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3a4cc46f2a13413240e17078399add63`)
      .then((res)=>{
        this.setState({
          weatherdata:res.data,
          city:res.data.name
        })
      }).catch((err)=>{
        console.log(err);
      })
    })
  }

  render() {
    console.log(this.state.weatherdata);
    return (
      <div>
        <Search change={this.dataChangeHandler} lat={this.state.lat} lon={this.state.lon} city={this.state.city} location={this.locationHandler} search={this.dataSearchHandler}/>
        <Result loading={this.state.loading} weatherdata={this.state.weatherdata}/>
        <Recentdata recent={this.state.recent} research={this.dataResearchHandler}></Recentdata>
      </div>
    )
  }
}
