import React from 'react';
import Axios from 'axios';
import VideoCard from './videoCard';
import classes from './HomePage.module.css';
// import classes from './HomePage.module.css';

class HomePage extends React.Component {
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
        return <VideoCard key={item.id} title = {item.title} thumbnail = {item.thumbnail} />
      })
      return(
       <div className={classes.CardGrid}>
              {videoCards}
       </div>
      );
  }
}
export default HomePage;