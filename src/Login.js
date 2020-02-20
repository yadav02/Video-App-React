import React from 'react';
import classes from './Login.module.css';


class Login extends React.Component{
    state = {
        log: "Login"
    }
    render(){
        return(
            <div className={classes.btnWrapper}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button className={classes.btn}>LogOut</button>
            </div>
        )
    }

}
export default Login;