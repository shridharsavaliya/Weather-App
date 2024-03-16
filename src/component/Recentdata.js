import React, { Component } from 'react'

export default class Recentdata extends Component {
  constructor(props) {
    super(props)
    
    this.props = props;
  }
  

  render() {
    return (
      <div className='container mt-3'>
        <h3 className='text-center'>Recent Data</h3>
        <ul>
          {
            this.props.recent.map((item,index)=>{
              return(
                <li key={index} onClick={()=> this.props.research(item.lat,item.lon)}>{item.city}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
