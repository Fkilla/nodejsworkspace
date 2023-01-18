const multipart = require('connect-multiparty');
const e = require('express');
var express = require('express');
var fs = require('fs');


//서버를 생성
var app = express();

app.use(multipart({uploadDir: __dirname + '/multipart'}));

app.get('/',function(request, response){
    fs.readFile('fileupload.html',function(error,data){
        response.send(data.toString());
    });
});
app.post('/',function(request, response){
    // console.log(request.body);
    // console.log(request.files);
    // response.redirect('/');//'/'로 다시 되돌림

    var comment =request.body.comment;
    var imageFile = request.files.image;

    if(imageFile){
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        if(type.indexOf('image') != -1){
            var outputPath = __dirname + '/multipart/' + Date.now() + '_'+ name;
            fs.rename(path,outputPath,function(error){
                response.redirect('/');
            });
        }else{
            fs.unlink(path,function(error){
                response.sendStatus(400);
            });
        }
    }else{
        response.sendStatus(404); //오류메세지
    }
});
//서버를 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});