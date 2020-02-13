import React from 'react';

const videoCard = (props) => {
    return(
        <div className ='VideoCard'>
            <img src = {props.thumbnail} alt= "Video Thumbnail" />
             <h3> {props.title}</h3>
        </div>
    )
}


export default videoCard;