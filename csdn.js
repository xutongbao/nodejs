var http = require('http');
var time = 1000;
var options = {
    host: 'blog.csdn.net',
    port: '80',
    path: '/xutongbao/article/details/77668400',
    method: 'GET',
    headers: {
        'Accept': 'text/html',
    }
};
var visit = function(){
    var req =  http.request(options,function(res){
        console.log(time);
        time--;
        if(time<0) {
            clearInterval(visitController);
        }
    })
    req.end();
}
var visitController =  setInterval(visit,Math.random()*5000 + 1000)