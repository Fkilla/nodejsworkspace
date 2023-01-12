var fs = require('fs');

// fs.readFile() : 비동기처리
// fs.readFileSync : 동기처리

var text = fs.readFileSync('textfile.txt','utf-8');
console.log(text);

fs.readFile('../textfile.txt','utf-8',function(error,data){
    console.log(data);
});

// fs.writeFile() :비동기
// fs.writeFileSync() :동기

var data = 'Hello World!!';

fs.writeFile('TextFileOtherWrite.txt',data,'utf-8',function(error){
    console.log('async complete');
});

fs.writeFileSync('TestFileOtherWriteSync',data,'utf-8');
console.log('sync complete');