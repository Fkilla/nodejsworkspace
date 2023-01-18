var express = require('express');

//서버를 생성
var app = express();

// //uri값, 행동
// app.get('/a',function(request, response){
//     response.send('<a href="/b">Go to B</a>');
// }); 

// app.get('/b',function(request, response){
//     response.send('<a href="/a">Go to A</a>');
// });

app.get('/page/:id',function(request, response){
    var page = request.params.id;
    response.send('<h1>' + page + 'Page </h1>');
});


//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});