define(function (){
    //var rootPath = "http://54.251.164.83:80/";
    var rootPath = "http://127.0.0.1:8889/";
    var config = {
        index: {
            api:{
                postMessage: rootPath + "POST/message",
                postBrowserInfo: rootPath + "POST/browserInfo"
            }
        }
    };
    return config;
});