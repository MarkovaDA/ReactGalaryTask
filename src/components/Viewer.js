import React from 'react';
import Image from './Image';
import Video from './Video';

class Viewer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: null,
            visible: false
        }
    }

    componentWillMount(){
         //отображаем новый элемент
         this.props.emitter.on('UPDATE_VIEW', (elem) => {
             this.updateView(elem)
         });
    }

    render(){
        const arrowStyle = {
            opacity: +this.state.visible
        };

        let component =  null;

        if (this.state.data != null)
        if (this.state.data.type === "image"){
            component = <Image url = {this.state.data.url} />;
        } else if (this.state.data.type === "video") {
            component = <Video url = {this.state.data.url} />
        }

        return (
            <div id="viewer" onMouseOver = {this.onMouseOver} onMouseLeave = {this.onMouseLeave}>
                <div className ="arrow arrow_left"  style={arrowStyle} onClick = {this.getPrevThumbnail.bind(this)}></div>

                <div className ="arrow arrow_right" style={arrowStyle} onClick = {this.getNextThumbnail.bind(this)}></div>

                <div className ="explore_zone">
                    {component}
                </div>
            </div>
        );
    }

    updateView(elem){
        this.setState({
            data: elem
        });
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
    getNextThumbnail(){
        const currentId = this.state.data.id;
        this.props.emitter.emit('VIEW_ANOTHER', currentId + 1);
    }
    getPrevThumbnail(){
        const currentId = this.state.data.id;
        this.props.emitter.emit('VIEW_ANOTHER', currentId - 1);
    }
}
export default Viewer;