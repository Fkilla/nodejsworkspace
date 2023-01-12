process.on('exit',function(code){
    console.log('안녕히 계세요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

process.exit(); //강제종료

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 종료');