import React, { Component } from 'react';
import Viewer from './components/Viewer';
import ThumbnailList from './components/ThumbnailList';
import EventEmitter from 'eventemitter3';
import './styles/slider.css';


class Slider extends Component {

  constructor(props){
    super(props);

    this.eventEmitter = new EventEmitter();

    this.state = {
      data: []
    }
  }

  render() {
    return (
        <div id="slider">
            <Viewer emitter = {this.eventEmitter}/>
            <ThumbnailList data = {this.state.data} emitter = {this.eventEmitter}/>
        </div>
    );
  }

  componentWillMount(){
      this.eventEmitter.on('SHOW_THUMBNAIL', (elem) =>{
          //обновляем представление во Viewer
          this.eventEmitter.emit('UPDATE_VIEW', elem);
      });
  }
  componentDidMount(){
      this.initThumbnail();
  }
  initThumbnail(){
      const data = require('./server/data.json');
      this.setState({
          'data': data
      });
  }

  componentWillUnmount(){
      //removeListener
  }
}

export default Slider;
