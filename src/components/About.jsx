import './About.css'
import React, { Component } from 'react';
import a from '../assets/img/cards/14a.jpg';
import Research from '../assets/img/icons/007-heartbeat.png';
import Clinical from '../assets/img/icons/019-surgery-room.png';
import Innovation from '../assets/img/icons/016-hospital.png';
import Education from '../assets/img/icons/010-pharmacy.png';

class About extends Component {
    render() {
        return (
            <>
                <div className='container justify-content' style={{marginTop:"100px"}}>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-2'>
                            <h4 className='p-3'><b>ACME CORP</b></h4>
                        </div>
                        <div className='col-md-7' style={{borderLeft:"2px solid #e5ebf6"}}>
                            <p className='ml-5 pl-2'>We are passionate about providing online <span style={{color:"#e7344c"}}>training on surgical knowledge.</span><strong> ACME Corp's </strong> world-leading institutes drive development, innovation, and research, across the ACME by delivering value-added products and services to the ACME's clinical divisions, clinical unit.</p>
                        </div>
                    </div>
                </div>

                <div className='container' style={{marginTop:"100px",marginBottom:"150px"}}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={a} alt="" className='what-we-do'/>
                            <div className='we-do'>
                                <h4>What We Do?</h4>
                                <p>The ACME's world-leading institutes drive development, innovation, and research. </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header text-align-center'>
                                    <center>
                                        <img src={Research} alt="Research" className='card-image'/>
                                        <h6>Research innovation</h6>
                                        <h6 className='read-more'>Read More  ---&gt; </h6>
                                    </center>
                                </div>
                            </div>
                            <div className='card mt-4'>
                                <div className='card-header text-align-center'>
                                    <center>
                                        <img src={Clinical} alt="" className='card-image'/>
                                        <h6>Clinical Evidence</h6>
                                        <h6 className='read-more'>Read More ---&gt;</h6>
                                    </center>    
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header text-align-center'>
                                    <center>
                                        <img src={Innovation} alt="" className='card-image'/>
                                        <h6>Innovation Translation</h6>
                                        <h6 className='read-more'>Read More  ---&gt;</h6>
                                    </center>    
                                </div>
                            </div>
                            <div className='card mt-4'>
                                <div className='card-header text-align-center'>
                                    <center>
                                        <img src={Education} alt="" className='card-image'/>
                                        <h6>Education</h6>
                                        <h6 className='read-more'>Read More ---&gt; </h6>
                                    </center>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About
