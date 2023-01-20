var mysql = require('mysql');
var fs = require('fs');
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'company'
});

//client.query('USE company');

// client.query('select * from products',function(error,result, fields){
//     if(error){
//         console.log('쿼리 문장에 오류가 있습니다.');
//     } else{ 
//         console.log(result);
//     }
// })

// client.query('insert into products (name, modelnumber, series) values (?,?,?)',[
//     'Name Value123', '0101111111','Series Value'
// ], function(error, results, fields){
    
// });

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request, response){
    fs.readFile('list.html', 'utf-8', function(error,data){
        client.query('select * from products', function(error, results){
            response.send(ejs.render(data,{data:results}));
        });
    });
});


app.get('/delete/:id', function(request, response){
    client.query('delete from products where id=?',[request.params.id], function(){
        response.redirect('/'); //삭제 이후에 지정
    });
});

app.get('/insert', function(request, response){
    fs.readFile('insert.html', 'utf-8', function(error,data){
        response.send(data);
    });
});
app.post('/insert', function(request, response){
    var body = request.body;

    client.query('insert into products (name, modelnumber, series) values (?,?,?)',[
        body.name, body.modelnumber, body.series
    ], function(){
        response.redirect('/');
    });
});


app.get('/edit/:id', function(request, response){
    fs.readFile('edit.html','utf-8',function(error, data){
        client.query('select * from products where id = ?',[
            request.params.id
        ],function(error, result){
            response.send(ejs.render(data,{data:result[0]}));
        });
    });
});
app.post('/edit/:id', function(request, response){
    var body = request.body;

    client.query('update products set name =?, modelnumber=?, series =? where id = ?',[
        body.name, body.modelnumber, body.series, request.params.id
    ], function(){
        response.redirect('/');
    });
});


app.listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
});
