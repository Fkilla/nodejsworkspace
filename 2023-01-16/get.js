var http = require('http');
var url = require('url');

http.createServer(function(request,response){
    var query = url.parse(request.url, true).query;
    //url모듈을 이용하여 parse를 사용하면 데이터를 객체 형태로 바꿔올 수 있다.
    //url.parse 뒤에는 true또는 false를 넣을 수 있는데 true는 객체 형태로, false는 문자열로 return 된다.

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});