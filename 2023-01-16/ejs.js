var ejs = require('ejs');
//html처럼 브라우저 화면에 표현해주는 모듈. 
var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
	fs.readFile('ejsPage2.ejs','utf-8',function(error,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data,{
            name:'Hong hello',
            discription:'seoul'
        }));

        
        //ejs.render는 데이터를 HTML형식으로 바꾸어준다.
    });
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});


