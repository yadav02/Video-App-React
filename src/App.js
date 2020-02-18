import React from 'react';
import VideoCard from './videoCard';
import Axios from 'axios';
import './App.css';


class App extends React.Component{
 
    state ={
      videoList:[]
    }

  componentDidMount() {
    Axios.get('http://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
      .then(res => {
          console.log(res);
          this.setState ({videoList: [...res.data]})
       })
      .catch ((err)=>{
            console.log(err);
            
      })
  }    

render(){
  const videoCards = this.state.videoList.map(item =>{
    return <VideoCard title = {item.title} thumbnail = {item.thumbnail} />
  } )
  return (
    <div className="CardGrid">
     {videoCards}
    </div>
  ); 
  }
}

export default App;
