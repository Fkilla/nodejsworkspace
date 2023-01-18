var express = require('express');

//서버를 생성
var app = express();

//기본 미들웨어 http://127.0.0.1:52273
app.use(function(request,response,next){

    console.log("첫번째 미들웨어");
    next(); //다음 위치에 use메소드가 정의한 함수를 호출한다.
});

app.use(function(request,response,next){

    console.log("두번째 미들웨어");
    next(); //다음 위치에 use메소드가 정의한 함수를 호출한다.
});
app.use(function(request,response,next){

    console.log("세번째 미들웨어");

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello basic</h1>')
});

//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});