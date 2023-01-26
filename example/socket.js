var socketio = require('socket.io');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    fs.readFile('socketpage.html',function(error,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('Server running at http://127.0.0.1:52273');
});
//소켓서버 생성
var io = socketio.listen(server);
//소켓서버 실행
var id = 0;
io.sockets.on('connection',function(socket){

    id = socket.id;

    socket.on('rint', function(data){
        console.log('Client Send Data:' , data);
        // socket.emit('smart',data);
        // io.sockets.emit('smart',data); //public 통신
        // socket.broadcast.emit('smart',data); //broadcast 통신
        io.sockets.to(id).emit('smart',data); //private 통신
        
    });
});