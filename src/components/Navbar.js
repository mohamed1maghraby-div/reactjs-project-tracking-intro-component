import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [icon,setIcon] = useState(false);
    
    const handelClick = () => setIcon(!icon);
    return(
        <div className='navbar'>
            <div className='section-1'>
                <Link to='/'>
                    <img src='images/logo.svg' alt='logo'/>
                </Link>
            </div>
            <div className={icon ? 'section-2 active' : 'section-2'}>
                <img className='icon' src={icon ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'}
                alt='icon' onClick={handelClick}/>
                <div className='link-colc'>
                    <Link to='/'>PRODUCT</Link> 
                    <Link to='/'>FEATURES</Link> 
                    <Link to='/'>PRICING</Link>
                    <Link className='login' to='/'>LOGIN</Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;