var express = require('express');

//서버를 생성
var app = express();

var routerA = express.Router();
var routerB = express.Router();

routerA.get('/index',function(request,response){
    response.send('<h1>routerA index Page</h1>');
});
routerB.get('/index',function(request,response){
    response.send('<h1>routerB index Page</h1>');
});

app.use('/a',routerA);
app.use('/b',routerB);


//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});