import React, { Component } from 'react';
import Skull from '../assets/img/icons/001-skull.png';
import Bone from '../assets/img/icons/003-bone.png';
import Spine from '../assets/img/icons/005-spine.png';
import Veterinarian from '../assets/img/icons/002-veterinarian.png';


class Membership extends Component {
    render() {
        return (
            <>
                <div style={{backgroundColor:"#29529b",paddingBottom:"80px"}}>
                    <center>
                        <h2 className='mt-5 pt-5' style={{color:"#ffffff"}}>Membership</h2>
                        <p className='mb-5' style={{color:"#ffffff"}}>Subscribe to the ACME membership & Find out latest ACME CORP Courses.</p>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={Skull} alt="" style={{border:"2px dashed #ffffff",padding:"30px",borderRadius:"50%",width:"150px",height:"150px",marginBottom:"40px"}} />
                                <p style={{color:"#ffffff"}}>ACME CFC</p>
                                <button>SUBSCRIBE</button>
                            </div>

                            <div className='col-md-3'>
                                <img src={Bone} alt="" style={{border:"2px dashed #ffffff",padding:"30px",borderRadius:"50%",width:"150px",height:"150px",marginBottom:"40px"}} />
                                <p style={{color:"#ffffff"}}>ACME Recon</p>
                                <button>SUBSCRIBE</button>
                            </div>

                            <div className='col-md-3'>
                                <img src={Spine} alt="" style={{border:"2px dashed #ffffff",padding:"30px",borderRadius:"50%",width:"150px",height:"150px",marginBottom:"40px"}} />
                                <p style={{color:"#ffffff"}}>ACME Spine</p>
                                <button>SUBSCRIBE</button>
                            </div>

                            <div className='col-md-3'>
                                <img src={Veterinarian} alt="" style={{border:"2px dashed #ffffff",padding:"30px",borderRadius:"50%",width:"150px",height:"150px",marginBottom:"40px"}} />
                                <p style={{color:"#ffffff"}}>ACME VET</p>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    </center>
                </div>
            </>
        )
    }
}

export default Membership

