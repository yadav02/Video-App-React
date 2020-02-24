import React from 'react';
import {Link} from 'react-router-dom';
import classes from './TopBar.module.css';
// import Login from './Login.js'

const Topbar = (props) => {

            return (
               
                    <div className ={classes.topbar}>
                    <Link to="/homepage">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    {
                        props.loggedInStatus ? <Link to="/login">LOGOUT</Link> : <Link to="/login">LOGIN</Link>
                    }
                    </div>
            )     
}

export default Topbar;