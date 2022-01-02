import React, { Component } from 'react'
import headerBanner from '../assets/img/header-banner.jpg';
import logo from '../assets/img/logo.png';
import './Abc.css';

class Abc extends Component {
    render() {
        return (
            <>
                <img src={headerBanner} alt="" className='head-banner'/>
                <div className='container'>
                    <div className='row pic'>
                        <div className='col-md-8'>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Abc
