var jade = require('jade');
var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
    fs.readFile('jadePage2.jade','utf-8',function(error,data){
        var fn = jade.compile(data);

        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fn({
            name:'Hong hello',
            discription:'seoul'
        }));
    });
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});

