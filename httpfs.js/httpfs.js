var fs = require('fs');
var http = require('http');

// http.createServer(function(request, response){
//     fs.readFile('HTMLPage.html',function(error,data){
//         response.writeHead(200,{'Content-type':'text/html'});
//         response.end(data);
//     })
// }).listen(52273,function(){
//     console.log('Server running at http://127.0.0.1:52273/');
// });

http.createServer(function(request, response){
    fs.readFile('dog3.png',function(error,data){
        response.writeHead(200,{'Content-Type':'image/png'});
        response.end(data);
    });
    
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273/');
});



//ㄱㅣ본틀
// http.createServer(function(request, response){

// }).listen(52273,function(){
//     console.log('Server running at http://127.0.0.1:52273/');
// });