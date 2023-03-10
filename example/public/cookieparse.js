var express = require('express');
var cookieParser = require('cookie-parser');

//서버를 생성
var app = express();

app.use(cookieParser());

app.get('/getCookie',function(request,response){
    response.send(request.cookies);
});

app.get('/setCookie',function(request,response){
    response.cookie('string','cookie');
    response.cookie('json',{name:'cookie', property : 'delicious'});

    response.redirect('/getCookie');
});

//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});