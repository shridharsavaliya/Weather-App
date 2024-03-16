import React, { Component } from 'react'
import img2 from "../img/draw1.webp"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    
  }
  

  render() {
    return (
      <div>
        <div className='container'>
            <div className='row bg-light p-5 mt-5'>
                <div className='col-xl-6'>
                    <form action="">
                        <label htmlFor="" className='fw-bold'>Enter City Name</label><br/>
                        <input type="text" className='my-3 w-100 p-1' name='city' placeholder='Enter City Name' onChange={this.props.change} value={this.props.city}/><br/>
                        <input type="button" value="Search" className='btn btn-info mb-4' onClick={this.props.citysearch}/><br/>
                        <h5 className='fw-bold d-inline'>Get co-ordinate</h5><button className='btn' onClick={this.props.location}><span className="material-symbols-outlined align-bottom">my_location</span></button><br/>
                        <label htmlFor="" className='mt-4'>Lat:</label><br/>
                        <input type="text" className='my-1 w-100 p-1' name='lat' placeholder='Enter latitude'  onChange={this.props.change} value={this.props.lat}/>
                        <label htmlFor="">Lon:</label>
                        <input type="text" className='w-100 p-1' name='lon' placeholder='Enter longitude' onChange={this.props.change} value={this.props.lon}/>
                        <input type="button" value="Search" className='btn btn-info my-3' onClick={this.props.search}/>
                    </form>
                </div>
                <div className='col-xl-6'>
                    <img src={img2} alt="" className='img-fluid rounded-4'/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
