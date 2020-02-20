import React from 'react';
import {Link} from 'react-router-dom';
import classes from './TopBar.module.css';
// import Login from './Login.js'

class Topbar extends React.Component{  
    constructor (props){
        super(props);
            this.state = {
                log: "Login"
            }
        }

        render() {
            return (
               
                     <div className ={classes.topbar}>
                    <Link to="/homepage">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/login">LOGIN</Link>
                    </div>
            )
        }
}

export default Topbar;