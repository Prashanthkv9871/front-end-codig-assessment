import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import headerBanner from '../assets/img/header-banner.jpg';

class Header extends Component {
    render() {
        return (
            <>
                <div className='container-fluid header'>
                    <div className='row'>
                        <div className='col-md-8 d-flex'>
                            <h6>ACME-CMF</h6>
                            <h6>ACME-Neuro</h6>
                            <h6>ACME-Spine</h6>
                            <h6>ACME-Trauma</h6>
                        </div>
                        <div className='col-md-4 d-flex'>
                            <h6>Contact</h6>
                            <h6>Privacy</h6>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={headerBanner} alt='Header-Banner' className='header-banner'></img>
                    <div className='container justify-content-between'>
                        <div className='row nav'>
                            <div className='col-md-8'>
                                <div>
                                    <img src={logo} alt="Logo" style={{width:"120px",height:"auto",marginRight:"15px"}}/>
                                    <Link to="/" className='nav-text' >Home</Link>
                                    <Link to="/about" className='nav-text'> About ACME</Link>
                                    <Link to="/" className='nav-text'>Courses & Events</Link>
                                    <Link to="/" className='nav-text'>News</Link>
                                    <Link to="/" className='nav-text'>Membership</Link>
                                </div>
                                <div>
                                    <h2 style={{paddingTop:'80px',paddingRight:"30%", color:"white"}}>ACME-VET'S North America Principle Course</h2>

                                    <p style={{paddingTop:"80px",paddingRight:"45%",color:"#ffffff",fontSize:"17px"}}>Visit ACME-VET's website to read about a DVM candidate's experience.</p>
                                    <p style={{backgroundColor:"#e5ebf6", marginTop:"50px",padding:'10px 30px', width:"200px",borderRadius:"5px"}}><i class="fas fa-play"></i> WATCH VIDEO</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <button>LOG IN</button>
                                <button>NEW USERS</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div style={{width:"100%",height:"65px",display:"flex",border:"10px solid blue"}}>
                    <div>
                        <p style={{backgroundColor:"orange",height:"100%",padding:"10px 5px 0px 10px",color:"#ffffff"}}>Latest Updates</p>
                    </div>
                    <div>
                        <p style={{height:"100%",padding:"10px 10px 0px 10px"}}>ACME-VET'S North America Principle Course.
                        <i className="fas fa-less-than" style={{backgroundColor:"#e5ebf6",fontSize:"15px",color:"#8c8c8c",padding:"5px",marginLeft:"600px"}}></i>   
                        <i className="fas fa-pause" style={{backgroundColor:"#e5ebf6",fontSize:"15px",color:"#8c8c8c",padding:"5px"}}></i>    
                        <i className="fas fa-greater-than" style={{backgroundColor:"#e5ebf6",color:"#8c8c8c",fontSize:"15px",padding:"5px"}}></i></p>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default Header
