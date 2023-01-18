var express = require('express');

//서버를 생성
var app = express();
app.use(express.static(__dirname + '/public'));

app.use(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<img src="/dog3.png" />');
});


//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});