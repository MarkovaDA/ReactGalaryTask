import React from 'react';
import Thumbnail from './Thumbnail';

class ThumbnailList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            thumbnails:[]
        }
        this.load = this.load.bind(this);

        this.clickThumbnail = this.clickThumbnail.bind(this);
    }
    componentDidMount(){
        window.addEventListener('load', this.load);
    }
    render(){
        return(
            <div id="collection">
                <div className="small_arrow small_arrow_left" id="tape_left"></div>
                {
                    this.state.thumbnails.map((path, i) =>
                    <Thumbnail key={i} url={path} number={i} clickHandler = {this.clickThumbnail}/>
                    )
                }
                <div className="small_arrow small_arrow_right" id="tape_right"></div>
            </div>
        );
    }
    //инициализировать
    load(){
        const context = this;
        this.props.data.forEach(function (item) {
            context.add(item)
        })
    }
    //добавить media
    add(url){
        let arr = this.state.thumbnails;
        arr.push(url);
        this.setState({thumbnails: arr});
    }
    //обработка клика на thumbnail
    clickThumbnail = number => e => {
        const src = this.state.thumbnails[number];
        this.props.emitter.emit('SHOW_THUMBNAIL', src);
    }
}
export default ThumbnailList;