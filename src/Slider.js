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
      urls: [
        "http://img2.autonavigator.ru/pics/020/887/59879_loaded.jpg",
        "http://www.free-hdwallpapers.com/wallpapers/cars/wallpaper-160692-8094963-4-4866088.jpg"
      ]
    }
  }

  render() {
    return (
        <div id="slider">
          <Viewer emitter = {this.eventEmitter}/>
          <ThumbnailList data = {this.state.urls} emitter = {this.eventEmitter}/>
        </div>
    );
  }

  componentWillMount(){
      const context = this;
      this.eventEmitter.on('SHOW_THUMBNAIL', function(src){
          console.log('SHOW_THUMBNAIL', src);
          //обновляем представление во Viewer
          context.eventEmitter.emit('UPDATE_VIEW', src);
      });
  }

  componentWillUnmount(){
      //removeListener
  }
}

export default Slider;
