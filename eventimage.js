const EventEmitter = require('events');
var custom = new EventEmitter();

custom.on('tick',function(){
    console.log('tick이벤트 실행됨');
});

custom.emit('tick');