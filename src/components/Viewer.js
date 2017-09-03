import React from 'react';

 class Viewer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            src:"http://daler.ru/pictures/1/2560x1600/Zakat-na-beregu-morya-9413.jpg"
        }
    }
    render(){
        return (
            <div id="viewer">
                <div className ="arrow arrow_left" id="viewer_left">
                </div>
                <div className ="arrow arrow_right" id="viewer_right">
                </div>

                <div className ="explore_zone">
                    <img src={this.state.src}/>
                </div>
            </div>
        );
    }
     componentWillMount(){
        const context = this;
         this.props.emitter.on('UPDATE_VIEW', function(src){
             console.log('UPDATE_VIEW', src);
             context.updateView(src)
         });
     }
    updateView(url){
        this.setState({src:url});
    }
}
export default Viewer;