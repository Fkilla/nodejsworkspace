// var http = require('http');

// var server = http.createServer();

// server.listen(55555); //포트번호

// var server = require('http').createServer();

// server.listen(55555,function(){
//     console.log('Server running at http;//127.0.0.1:52273/')
// });

// server.close();

require('http').createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text.html'});
    response.end('<h1>hello world with node js</h1>')

}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/')
});