var express = require('express');
var routera = require('./routerA');
var router_login = require('./router_login');

//서버를 생성
var app = express();

app.use('/a',routera.router);
app.use('/login',router_login.router);

//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});