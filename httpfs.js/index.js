var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    url.parse(request.url)

    var pathname = url.parse(request.url).pathname
    //parse를 사용하면 주솟값을 객체화 할 수 있다.
    //pathname을 이용하여 어딜 호출했는지 알수있고 response로 응답결과를 보여준다. response.end는 값을 보내기.

    if(pathname == '/'){
        fs.readFile('index.html',function(error, data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        });
    }else if(pathname == '/OtherPage'){
        fs.readFile('OtherPage.html', function(error, data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        })
    }
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});