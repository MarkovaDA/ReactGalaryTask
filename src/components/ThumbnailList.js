import React from 'react';
import Thumbnail from './Thumbnail';


class ThumbnailList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            thumbnails:[],
            visible: false
        }

        this.loadThumbnails = this.loadThumbnails.bind(this);

        this.onClickThumbnail = this.onClickThumbnail.bind(this);
    }
    componentDidMount(){
        window.addEventListener('load', this.loadThumbnails);

        this.props.emitter.on('VIEW_ANOTHER', (id) => {
            this.props.emitter.emit('SHOW_THUMBNAIL', this.get(id));
        });
    }

    render(){
        const arrowStyle = {
            opacity: +this.state.visible
        };
        return(
            <div className="collection" onMouseOver = {this.onMouseOver} onMouseLeave = {this.onMouseLeave}
                 ref={collection => {this.container = collection}}>
                <div className="small_arrow small_arrow_left" style={arrowStyle} onClick = {this.prevThumbnail.bind(this)}></div>
                {
                    this.state.thumbnails.map((item, i) =>
                    <Thumbnail key = {i} data = {item} clickHandler = {this.onClickThumbnail} />)
                }
                <div className="small_arrow small_arrow_right" style={arrowStyle} onClick = {this.nextThumbnail.bind(this)}></div>
            </div>
        );
    }
    //инициализировать
    loadThumbnails(){
        this.props.data.forEach((item, index) => {
            item.number = index;
            item.id = index;
            this.addThumbnail(item)
        })
    }

    //добавить новый thumbnail
    addThumbnail(item){
        let arr = this.state.thumbnails;
        arr.push(item);

        this.setState({thumbnails: arr});
    }

    nextThumbnail(){
        const items = this.state.thumbnails;
        const limitIndex = parseInt(this.container.offsetWidth / 120);

        let newIndex;

        items.forEach((item) => {
            newIndex = item.number + 1;

            if (newIndex > limitIndex)
                newIndex = 0;

            item.number = newIndex;

        });
        this.setState({
            thumbnails: items
        });
    }

    prevThumbnail(){
        const items = this.state.thumbnails;
        const limitIndex = parseInt(this.container.offsetWidth / 120);
        let newIndex;

        items.forEach((item) => {
            newIndex = item.number - 1;

            if (newIndex < 0)
                newIndex = limitIndex;

            item.number = newIndex;
        });
        this.setState({
            thumbnails: items
        });
    }
    get(index){
        let newIndex;

        if (index == this.count()){
            newIndex = 0;
        } else if (index < 0){
            newIndex = this.count() - 1;
        } else {
            newIndex = index;
        }
        return this.state.thumbnails[newIndex];
    }

    count(){
        return this.state.thumbnails.length;
    }

    //обработка клика на thumbnail
    onClickThumbnail = id => e => {
        const elem = this.state.thumbnails[id];
        this.props.emitter.emit('SHOW_THUMBNAIL', elem);
    }
    //отобразить стрелки прокрутки
    onMouseOver = () => {
        this.setState({
            visible: true
        });
    }
    //спрятать полосы прокрутки
    onMouseLeave = () => {
        this.setState({
            visible: false
        });
    }
}
export default ThumbnailList;