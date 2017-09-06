import React, { Component } from 'react';


class Thumbnail extends React.Component{

    constructor(props){
        super(props);
        /*this.props.data = {number, url, type, id}*/
        //TODO: number заменить на индекс
    }

    render(){
        const itemStyle = {
            left: this.props.data.number*120
        };
        let src =  null;

        if (this.props.data.type ==="image"){
            src = this.props.data.url;
        } else if (this.props.data.type ==="video") {
            //единая иконка для изображений
            src = require("../images/video_icon.png");
        }

        return (
                <div className ="item" style={itemStyle} type={this.props.data.type}
                     onClick = {this.props.clickHandler(this.props.data.id)}>
                    <img src={src} />
                </div>
        );
    }
}
export default Thumbnail;