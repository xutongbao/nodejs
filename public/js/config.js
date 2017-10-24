define(function (){
    var rootPath = "http://127.0.0.1:8888/";
    var config = {
        index: {
            api:{
                postMessage: rootPath + "POST/message"
            }
        }
    };
    return config;
});