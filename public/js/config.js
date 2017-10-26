define(function (){
    var rootPath = "http://54.251.164.83:80/";
    var config = {
        index: {
            api:{
                postMessage: rootPath + "POST/message"
            }
        }
    };
    return config;
});