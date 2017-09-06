class MediaObject {
    constructor(_url){
        this.url = _url;
        console.log('creating media_object');
    }
    /*url элемента*/
    src(){
        return this.url;
    }
    /*представление элемента во viewer*/
    preview(){

    }
    /*анимация элемента при появлении*/
    animate(){

    }
    /*скрыть элемент*/
    close(){

    }
}

export default MediaObject;