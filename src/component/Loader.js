
import React, { Component } from 'react'
import { LineWave } from 'react-loader-spinner'

export default class Loader extends Component {
    render() {
        return (
            <div>
                <div className='d-flex justify-content-center position-absolute w-100 mt-5'>
                    <LineWave
                        visible={true}
                        height="200"
                        width="200"
                        color="#4fa94d"
                        ariaLabel="line-wave-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor=""
                    />
                </div>
            </div>
        )
    }
}
