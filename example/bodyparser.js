var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const { response } = require('express');

//서버를 생성
var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request,response){
    if(request.cookies.auth){
        //auth정보가 true면 성공, false면 실패?
        response.send('<h1>Login Success</h1>')    
    }else{
        response.redirect('/login');
    }

});
app.get('/login', function(request,response){
    fs.readFile('login.html',function(error,data){
        response.send(data.toString());
    });
});
app.post('/login', function(request,response){
    var login = request.body.login;
    var password = request.body.password;

    if(login == 'rint' && password == '1234'){
        response.cookie('auth',true);
        response.redirect('/');
    }else{
        response.redirect('/login');
    }
});



//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});