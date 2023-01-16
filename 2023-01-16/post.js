var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
    if(request.method == 'GET'){
        //var query = url.parse(request.url, true).query;
        fs.readFile('HTMLpage.html',function(error,data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        });
    }else if(request.method =='POST'){
        //POST방식의 요청처리
        request.on('data',function(data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end('<h1>'+ data +'</h1>');
            //console.log('post 실행중');
        });
    }
    
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});