import React from 'react';
import TopBar from './TopBar'
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Login from './Login';



class App extends React.Component{
 
    
render(){
  
  return (
       <BrowserRouter>
        <div>
           <TopBar/>
          <switch>
            <Route path ="/homepage" component={HomePage} />
            <Route path ="/about" component={About} /> 
            <Route path ="/contact" component={Contact} />
            <Route path ="/login" component={Login} />
          </switch>
         </div>
       </BrowserRouter>
     ); 
  }
}

export default App;
