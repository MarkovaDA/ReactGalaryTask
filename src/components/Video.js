import React, { Component } from 'react';


class Video extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
           <video id="video_content" width="640" height="480" controls="controls" poster={require('../images/video_poster.jpg')}>
               <source src={this.props.url} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
           </video>
        );
    }
}
export default Video;