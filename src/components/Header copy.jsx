import React from 'react';
import headerBanner from '../assets/img/header-banner.jpg'
import logo from '../assets/img/logo.png'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <>
                <div>
                    <header className='container-md header'>
                        <h6>ACME-CMF</h6>
                        <h6>ACME-Neuro</h6>
                        <h6>ACME-Spine</h6>
                        <h6>ACME-Trauma</h6>
                        <h6 style={{marginLeft:"15%"}}>Contact</h6>
                        <h6>Privacy</h6>
                    </header>
                </div>
                <div>
                    <img src={headerBanner} alt='Header-Banner' className='header-banner'></img>
                    <div className='nav'>
                        <img src={logo} alt="logo" style={{width:"160px",height:"auto"}}/>
                        <Link to="/">Home</Link>
                        <Link to="tgrfvb"> About ACME</Link>
                        <Link to="wgr">Courses & Events</Link>
                        <Link to="tggg">News</Link>
                        <Link to="gtwg">Membership</Link>


                        <button className='btn mr-3' style={{height:"50px",color:"white",backgroundColor:"#f59e33"}}>LOG IN</button>

                        <button className='btn' style={{height:"50px",color:"white",backgroundColor:"#f59e33"}}>NEW USER</button>
                    </div>
                </div>
            </>
    )
  }
}

export default Header;
