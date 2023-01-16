var http = require('http');
http.createServer(function(request,response){
    if(request.headers.cookie){
        var cookie = request.headers.cookie.split(';').map(
            function(element){
                var element = element.split('=');
                return {key:element[0], value:element[1]};
            }
        );
        response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
        //쿠키는 다음과 같이 넘어온다. [{key value},{key value}];
    }else{
        response.writeHead(200,
            {
            'Content-Type':'text/html',
            'Set-Cookie':['name=hong','region=seoul']
            }
        );
        response.end('<h1>쿠키를 생성했습니다.</h1>');
    }       
    
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});