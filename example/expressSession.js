var express = require('express');
var fs = require('fs');
var session = require('express-session');

//서버를 생성
var app = express();

app.use(session({
    secret:'secret key',
    resave:false,
    saveUninitalized:true
}));

app.use(function(request, response){
    request.session.now = (new Date()).toUTCString(); //UTC를 포함한 날짜정보를 String으로 저장하겠다는 뜻.
    response.send(request.session);
});

//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});