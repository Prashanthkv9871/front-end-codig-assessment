import React, { Component } from 'react'
import Avatar from '../assets/img/avatar1.jpg'
import Vet from '../assets/img/cards/3a.jpg'
import Spine from '../assets/img/cards/3b.jpg'


class News extends Component {
    render() {
        return (
            <>
                <div style={{marginBottom:"150px"}}>
                    <center>
                        <div>
                            <h2>News & Highlights</h2>
                            <p style={{marginBottom:"100px"}}>latest events and community activities - 2021</p>
                        </div>
                    </center>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={Vet} alt='' />
                                    <div className="card-body">
                                        <p className="card-title text-primary">ACME VET</p>
                                        <h5 className="card-text font-weight-bold">ACME VET Collaborative Research Grant</h5>
                                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consiquest. Lorem ipsum dolor sit amet consiquest.</p>
                                    </div>
                                    <div class="card-body">
                                        <img src={Avatar} alt=''  style={{width:'40px',height:'40px', borderRadius:'50%',marginRight:"15px"}}/>
                                        <span className='text-dark'>Admin User</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={Spine} alt='' />
                                    <div className="card-body">
                                        <p className="card-title text-primary">ACME SPINE</p>
                                        <h5 className="card-text font-weight-bold"> ACME Spine Knowledge  Forum</h5>
                                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consiquest. Lorem ipsum dolor sit amet consiquest.</p>
                                    </div>
                                    <div class="card-body">
                                        <img src={Avatar} alt=''  style={{width:'40px',height:'40px', borderRadius: '50%',marginRight:"15px"}}/>
                                        <span className='text-dark'>Admin User</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <p>TODAY'S NEWS</p>
                                        <h5>Call for applications : ACME Clinical Science Advisory Commission</h5>
                                    </div>
                                    <div className='card-body'>
                                        <span className='text-primary font-weight-bold'>Explore More </span>
                                        <i class="fas fa-chevron-right rounded-circle" style={{marginLeft:"180px",backgroundColor:"#e5ebf6",padding:"5px"}}></i>
                                    </div>
                                </div>

                                <div className='card' style={{backgroundColor:"#29529b"}}>
                                    <div className='card-header'>
                                        <p className='text-white'>TODAY'S NEWS</p>
                                        <h4 className='text-white'> 2021 eCM Conference - Davos Courses 2021 - Overview</h4>
                                    </div>
                                    <div className='card-body'>
                                        <span></span>
                                        <i class="fas fa-chevron-right rounded-circle text-light" style={{marginLeft:'280px',backgroundColor:"#29529b",border:"1px solid white",padding:"5px"}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:"100px"}}>
                        <center>
                            <button>VIEW ALL NEWS</button>
                        </center>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default News
