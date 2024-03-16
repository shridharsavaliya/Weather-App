import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/logo.png"

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <img className="navbar-brand logo" src={logo} alt='weather logo'></img>
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/weather">Weather</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
