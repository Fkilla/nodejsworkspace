var rint = require('./rint');

rint.timer.on('tick',function(code){
    console.log('tick 이벤트 실행되어짐');
});