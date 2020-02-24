import React from 'react';
import TopBar from './TopBar'
import {Route,BrowserRouter,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import NotFound from './NotFound'



class App extends React.Component{
 
    state ={
         userlogedIn : false
       }


       onUserLoggedSuccess = () => {
         this.setState({userlogedIn: true})
       }

       onUserLoggedOut = () => {
        this.setState({userlogedIn: false})
      }

render(){
  
  return (
       <BrowserRouter>
        <div>
           <TopBar  loggedInStatus={this.state.userlogedIn}/>
          <switch>
            <Route exact path ="/" component={HomePage} />
            <Route path ="/about" component={About} /> 
            <Route path ="/contact" component={Contact} />
            <Route path ="/login" render={() => <Login loggedInStatus = {this.state.userlogedIn} onUserLoggedSuccess = {this.onUserLoggedIn}/>} />
            <Route path = "/not-found"  component = {NotFound}/>
            <Route render = {() => <Redirect to =  "/not-found" />}/>

          </switch>
         </div>
       </BrowserRouter>
     ); 
  }
}

export default App;
