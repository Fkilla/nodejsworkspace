var express = require('express');

var router = express.Router();

router.get('/index',function(request, response){
    response.send('<h1>please do login</h1>')
    
});
exports.router = router;
