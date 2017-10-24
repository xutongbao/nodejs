var http = require('http');
var url = require('url');
var util = require('util');
var email   = require("emailjs");
var express = require("express");
var fs = require("fs");
var config = require('./config').config;
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
});

var emailServer  = email.server.connect({
    user: config.email.user,
    password: config.email.password,
    host: config.email.host,
    ssl:     true
});

app.post('/POST/message', function (req, res) {

    console.log(req.body);
    var response = {
        "message":req.body.message
    };
    // emailServer.send({
    //     text: req.body.message,
    //     from: config.email.from,
    //     to: config.email.to,
    //     subject: config.email.subject
    // }, function(err, message) {
    //     console.log(err || message);
    // });
    res.send(response);
    saveMessage(req.body.message);
});

var saveMessage = function (message) {
    fs.appendFile('message.txt', getDatetime() + ':' + message + '\n',  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
    });
};

var getDatetime = function () {
    function p(s) {
        return s < 10 ? '0' + s: s;
    }

    var myDate = new Date();
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+':'+p(s);
    return now;
};

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
