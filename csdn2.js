var http = require('http');
var time = 1000;
var options = {
    host: 'www.66rpg.com',
    port: '80',
    path: '/j/7',
    method: 'GET',
    headers: {
        'Accept': 'text/html',
    }
};
var visit = function(){
    var req =  http.request('http://www.66rpg.com/j/7',function(res){
        console.log('STATUS: ' + res.statusCode);  
        //console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (chunk) {  
            //console.log('BODY: ' + chunk);  
        });  
        time--;
        if(time<0) {
            clearInterval(visitController);
        }
    })
    req.end();
}
visit();
var visitController =  setInterval(visit,Math.random()*1000 + 2000)