import React, { Component } from 'react';
import Logo from '../assets/img/logo.png'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer py-5">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={Logo} alt="" className='card-img-top' style={{height:"80px"}}/>
                                <p style={{color:"#8c8c8c",marginTop:"30px"}}>Help. Drive. Change</p>
                            </div>

                            <div className='col-md-2'>
                                <h5 className='text-white'>Navigate</h5>
                                <p className='mt-4'>Home</p>
                                <p>Courses & Events</p>
                                <p>Membership</p>
                                <p>Privacy</p>
                            </div>

                            <div className='col-md-2 mt-5'>
                                <p>About ACME</p>
                                <p>News</p>
                                <p>Contact</p>
                            </div>

                            <div className='col-md-3'>
                                <h5 className='text-white'>Stay in touch</h5>
                                <p>Subscribe to receive the latest ACME CORP news, calls, and update.</p>
                                <input type="text" placeholder='Enter your email address' className='form-control'/> 
                            </div>

                            <div className='col-md-2'>
                                <h5 className='text-white'>Social Media</h5>
                                <p>
                                    <i className="fab fa-facebook-f mr-2"></i>
                                    <i className="fab fa-twitter mr-2"></i> 
                                    <i className="fab fa-youtube"></i>                              
                                </p>
                                <span>support@acmecorp.org</span>
                            </div>
                        </div>
                    </div>

                    <div style={{textAlign:"right",bottom:"0px"}}> 
                        <i class="far fa-comment-alt bg-primary text-light rounded-circle mr-4 p-2"></i>
                        <i class="fas fa-arrow-up bg-primary text-light p-2"></i>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;
