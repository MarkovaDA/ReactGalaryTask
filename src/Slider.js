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
          {'url': "http://img2.autonavigator.ru/pics/020/887/59879_loaded.jpg" , 'type': 'image'},
          {'url': "http://www.free-hdwallpapers.com/wallpapers/cars/wallpaper-160692-8094963-4-4866088.jpg", 'type': 'image'},
          {'url': 'https://youtu.be/u4GDXF0xaOQ', 'type': 'video'}
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
      //считать данные из json файла
      this.eventEmitter.on('SHOW_THUMBNAIL', (elem) =>{
          //обновляем представление во Viewer
          this.eventEmitter.emit('UPDATE_VIEW', elem);
      });
  }

  componentWillUnmount(){
      //removeListener
  }
}

export default Slider;
