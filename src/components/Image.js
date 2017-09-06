import React, { Component } from 'react';


class Image extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <img src={this.props.url}/>
        );
    }
}
export default Image;