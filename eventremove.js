var onUncaughtException = function(error){
    console.log('예외발생!!!!!!! 한번 봐줌');

    process.removeListener('uncaughtException',onUncaughtException);
}
process.on('uncaughtException',onUncaughtException);

var test = function(){
    setTimeout(test,2000);
    error.error.error();
};

setTimeout(test, 2000);