var express = require('express');

//서버를 생성
var app = express();

//기본 미들웨어 http://127.0.0.1:52273
app.use(function(request,response){
    var name = request.query.name;
    var region = request.query.region;

    response.send('<h1>' + name + '-' + region + '</h1>')
});

//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});