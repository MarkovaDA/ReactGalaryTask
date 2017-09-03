import React, { Component } from 'react';


class Thumbnail extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var itemStyle = {
            left: this.props.number*120
        }
        return (
                <div className ="item" style={itemStyle} onClick = {this.props.clickHandler(this.props.number)}>
                    <img src={this.props.url}/>
                </div>
        );

    }
}
export default Thumbnail;