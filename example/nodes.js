var express = require('express');

//서버를 생성
var app = express();

app.get('/user',function(request,response){});
app.get('/user/:id',function(request,response){});
app.post('/user',function(request, response){});
app.put('/user/:id',function(request,response){});
app.delete('/user/:id',function(request,response){});


//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});